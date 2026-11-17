// The 3D stage: renderer, studio light, floor, camera moves and the state machine that carries a
// model between Flat, Inside, Folded and Open. It knows nothing about print; models only expose a
// parameter vector per state, so folds, wraps and page turns all animate the same way.

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const DEG = Math.PI / 180;
const FOV = 22;
const UNIT = 5; // the flat sheet is normalised to this many world units

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const clamp01 = (t) => Math.min(1, Math.max(0, t));

const Q_FLAT = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -90 * DEG);
const Q_FLIP = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 180 * DEG);

function poseQuat(name, yaw = 0) {
  const q = new THREE.Quaternion();
  if (name && name.up) {
    // Explicit: which model direction points up, and which one looks at the camera.
    const up = new THREE.Vector3(...name.up).normalize();
    const face = new THREE.Vector3(...name.face);
    face.addScaledVector(up, -face.dot(up)).normalize();
    const right = new THREE.Vector3().crossVectors(up, face).normalize();
    const m = new THREE.Matrix4().makeBasis(right, up, face);
    q.setFromRotationMatrix(m).invert();
  } else if (Array.isArray(name)) {
    q.setFromEuler(new THREE.Euler(name[0] * DEG, name[1] * DEG, name[2] * DEG, 'YXZ'));
  } else {
    switch (name) {
      case 'keep':
        q.copy(Q_FLAT);
        break;
      case 'flip':
        q.copy(Q_FLAT).multiply(Q_FLIP);
        break;
      case 'stand':
      case 'stand-outside':
        q.identity();
        break;
      case 'stand-inside':
        q.copy(Q_FLIP);
        break;
      default:
        q.copy(Q_FLAT);
    }
  }
  if (yaw) q.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw * DEG));
  return q;
}

export class Stage {
  constructor(host, opts = {}) {
    this.host = host;
    this.opts = opts;
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: !!opts.capture,
    });
    this.renderer = renderer;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, opts.maxDpr || 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.touchAction = 'none';

    const scene = new THREE.Scene();
    this.scene = scene;
    this.bg = new THREE.Color(opts.background ?? '#060606');
    scene.background = this.bg;

    const pmrem = new THREE.PMREMGenerator(renderer);
    this.envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = this.envRT.texture;
    scene.environmentIntensity = 0.42;
    pmrem.dispose();

    const key = new THREE.DirectionalLight('#ffffff', 2.1);
    key.position.set(-3.4, 8.5, 4.6);
    key.castShadow = true;
    key.shadow.mapSize.set(opts.shadowSize || 2048, opts.shadowSize || 2048);
    const sc = key.shadow.camera;
    sc.left = -6;
    sc.right = 6;
    sc.top = 6;
    sc.bottom = -6;
    sc.near = 0.5;
    sc.far = 30;
    key.shadow.bias = -0.00012;
    key.shadow.normalBias = 0.012;
    key.shadow.radius = 7;
    scene.add(key);
    this.key = key;

    const rim = new THREE.DirectionalLight('#9db8ff', 0.5);
    rim.position.set(5, 3.5, -5);
    scene.add(rim);

    // Soft pool of light on the floor; the black site background stays black around it.
    const c = document.createElement('canvas');
    c.width = c.height = 512;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(256, 256, 8, 256, 256, 256);
    g.addColorStop(0, 'rgba(36,37,42,1)');
    g.addColorStop(0.5, 'rgba(20,21,24,0.85)');
    g.addColorStop(1, 'rgba(6,6,6,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, 512, 512);
    const poolTex = new THREE.CanvasTexture(c);
    poolTex.colorSpace = THREE.SRGBColorSpace;
    this.pool = new THREE.Mesh(
      new THREE.CircleGeometry(11, 64),
      new THREE.MeshBasicMaterial({ map: poolTex, transparent: true, depthWrite: false, toneMapped: false }),
    );
    this.pool.rotation.x = -Math.PI / 2;
    this.pool.position.y = -0.012;
    this.pool.renderOrder = -2;
    scene.add(this.pool);

    this.shadowCatcher = new THREE.Mesh(new THREE.CircleGeometry(16, 48), new THREE.ShadowMaterial({ opacity: 0.62 }));
    this.shadowCatcher.rotation.x = -Math.PI / 2;
    this.shadowCatcher.position.y = -0.008;
    this.shadowCatcher.receiveShadow = true;
    this.shadowCatcher.renderOrder = -1;
    scene.add(this.shadowCatcher);

    this.camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 400);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    Object.assign(this.controls, {
      enableDamping: true,
      dampingFactor: 0.08,
      screenSpacePanning: true,
      zoomToCursor: true,
      rotateSpeed: 0.8,
      maxPolarAngle: 0.57 * Math.PI,
    });
    this.controls.addEventListener('change', () => this.invalidate());
    this.controls.addEventListener('start', () => {
      this.userMoved = true;
      this.stopSpin();
    });

    this.rig = new THREE.Group();
    this.rig.matrixAutoUpdate = false;
    scene.add(this.rig);

    this.state = 'flat';
    this.needs = true;
    this.ray = new THREE.Raycaster();
    this._raf = 0;
    this._tick = this._tick.bind(this);
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(host);
    this.resize();
    this._tick();
  }

  invalidate() {
    this.needs = true;
  }

  resize() {
    const w = this.host.clientWidth || 800;
    const h = this.host.clientHeight || 600;
    if (w === this.w && h === this.h) return;
    this.w = w;
    this.h = h;
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = `${w}px`;
    this.renderer.domElement.style.height = `${h}px`;
    this.camera.aspect = w / h;
    this._viewOffset();
    this.camera.updateProjectionMatrix();
    if (this.model && !this.tween && !this.userMoved && this.state !== 'custom') this._frame(this.state);
    this.invalidate();
  }

  // Moves the optical centre down when a title sits on top of the picture.
  setSafe(top, bottom) {
    this.safe = { top, bottom };
    this._viewOffset();
    this.camera.updateProjectionMatrix();
    this.cache = {};
  }

  _viewOffset() {
    const s = this.safe;
    if (!s || !this.w) return;
    this.camera.setViewOffset(this.w, this.h, 0, (s.bottom - s.top) / 2, this.w, this.h);
  }

  // ---- model handling ------------------------------------------------------------------------

  setModel(model, { die, state = 'closed', instant = true } = {}) {
    this.clearSticker();
    if (this.model) {
      this.rig.remove(this.model.object);
      this.model.dispose?.();
    }
    this.tween = null;
    this.scrubWin = null;
    this.model = model;
    this.die = die;
    this.rig.add(model.object);
    this.scaleK = UNIT / Math.max(die.w, die.h, 1);
    if (die.meta.unitBoost) this.scaleK *= die.meta.unitBoost;
    this.userMoved = false;
    this.cache = {};
    this.go(state, { instant });
  }

  // Precomputed look of a state: fold vector, pose, and where the model sits on the floor.
  _info(state) {
    if (this.cache[state]) return this.cache[state];
    const { die, model } = this;
    const vec = model.vector(state);
    let q;
    if (state === 'flat') q = Q_FLAT.clone();
    else if (state === 'inside') q = Q_FLAT.clone().multiply(Q_FLIP);
    else if (state === 'open') q = poseQuat(die.pose.open, die.pose.openYaw || 0);
    else q = poseQuat(die.pose.fold, die.pose.closedYaw || 0);
    if (state === 'closed' && die.pose.tilt) {
      q.premultiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), die.pose.tilt * DEG));
    }
    const box = model.bounds(vec);
    const c = box.getCenter(new THREE.Vector3());
    const s = this.scaleK;
    // World half-height after the pose rotation.
    const corners = [];
    for (const px of [box.min.x, box.max.x]) {
      for (const py of [box.min.y, box.max.y]) {
        for (const pz of [box.min.z, box.max.z]) {
          corners.push(new THREE.Vector3(px, py, pz).sub(c).multiplyScalar(s).applyQuaternion(q));
        }
      }
    }
    let minY = Infinity;
    for (const v of corners) minY = Math.min(minY, v.y);
    const lift = -minY;
    const view = (die.view && die.view[state]) || (state === 'flat' || state === 'inside' ? { az: 0, el: 89.9 } : { az: -32, el: 30 });
    const info = { vec, q, c, lift, corners, view: { ...view }, s };
    info.cam = this._fit(info);
    this.cache[state] = info;
    return info;
  }

  _fit(info) {
    const az = info.view.az * DEG;
    const el = info.view.el * DEG;
    const dir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).normalize();
    const target = new THREE.Vector3(0, info.lift, 0);
    const up = Math.abs(dir.y) > 0.999 ? new THREE.Vector3(0, 0, -1) : new THREE.Vector3(0, 1, 0);
    const right = new THREE.Vector3().crossVectors(up, dir).normalize();
    const camUp = new THREE.Vector3().crossVectors(dir, right).normalize();
    // Vertical centring: measure the projected box and shift the target to its middle.
    let minU = Infinity;
    let maxU = -Infinity;
    let minR = Infinity;
    let maxR = -Infinity;
    for (const v of info.corners) {
      const u = v.dot(camUp);
      const r = v.dot(right);
      minU = Math.min(minU, u);
      maxU = Math.max(maxU, u);
      minR = Math.min(minR, r);
      maxR = Math.max(maxR, r);
    }
    target.add(camUp.clone().multiplyScalar((minU + maxU) / 2)).add(right.clone().multiplyScalar((minR + maxR) / 2));
    const aspect = this.camera.aspect || 1.4;
    const vf = (FOV * DEG) / 2;
    const hf = Math.atan(Math.tan(vf) * aspect);
    const safe = this.safe || { top: 0, bottom: 0 };
    const usable = Math.max(0.3, 1 - (safe.top + safe.bottom) / (this.h || 600));
    const pad = info.view.pad || (this.opts.pad ?? 1.16);
    let d = 0;
    for (const v of info.corners) {
      const p = v.clone().sub(target.clone().setY(target.y - info.lift));
      const zc = p.dot(dir);
      d = Math.max(d, (Math.abs(p.dot(right)) * pad) / Math.tan(hf) + zc);
      d = Math.max(d, (Math.abs(p.dot(camUp)) * pad) / usable / Math.tan(vf) + zc);
    }
    d *= info.view.zoom || 1;
    return { az: info.view.az, el: info.view.el, d, target };
  }

  _placeCam(cam) {
    const az = cam.az * DEG;
    const el = cam.el * DEG;
    const dir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
    this.camera.position.copy(cam.target).addScaledVector(dir, cam.d);
    this.camera.near = Math.max(0.02, cam.d / 60);
    this.camera.far = cam.d * 8 + 40;
    this.camera.updateProjectionMatrix();
    this.controls.target.copy(cam.target);
    this.camera.lookAt(cam.target);
  }

  _setRig(q, c, lift) {
    const s = this.scaleK;
    const m = new THREE.Matrix4();
    m.compose(new THREE.Vector3(0, lift, 0), q, new THREE.Vector3(s, s, s));
    m.multiply(new THREE.Matrix4().makeTranslation(-c.x, -c.y, -c.z));
    this.rig.matrix.copy(m);
    this.rig.matrixWorldNeedsUpdate = true;
  }

  _frame(state) {
    this.cache = {};
    const i = this._info(state);
    this._placeCam(i.cam);
    this.invalidate();
  }

  _currentCam() {
    const sp = new THREE.Spherical().setFromVector3(this.camera.position.clone().sub(this.controls.target));
    return {
      az: (sp.theta / DEG + 360) % 360 > 180 ? (sp.theta / DEG + 360) % 360 - 360 : (sp.theta / DEG + 360) % 360,
      el: 90 - sp.phi / DEG,
      d: sp.radius,
      target: this.controls.target.clone(),
    };
  }

  // ---- seal sticker ---------------------------------------------------------------------------
  // A round sticker on one panel (for example a seal that closes a gatefold). It lands when the
  // piece closes and lifts off before it opens. `s`: { src, panel, x, y, d, t?, z0?, edge?, height? }
  // with x/y in mm in the panel's sheet coordinates and d the diameter in mm.
  async loadSticker(s) {
    const tex = await new THREE.TextureLoader().loadAsync(s.src);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    this.setSticker({ ...s, texture: tex });
  }

  setSticker(s) {
    this.clearSticker();
    const panel = this.model?.byId?.[s.panel];
    if (!panel) return;
    const r = s.d / 2;
    const t = s.t ?? 0.14;
    const face = new THREE.Mesh(
      new THREE.CircleGeometry(r, 96),
      new THREE.MeshPhysicalMaterial({ map: s.texture, roughness: 0.42, metalness: 0, clearcoat: 0.45, clearcoatRoughness: 0.32, transparent: true }),
    );
    face.position.z = t;
    const edge = new THREE.Mesh(
      new THREE.CylinderGeometry(r, r, t, 96, 1, true),
      new THREE.MeshStandardMaterial({ color: s.edge || '#9a7a76', roughness: 0.55, transparent: true }),
    );
    edge.rotation.x = Math.PI / 2;
    edge.position.z = t / 2;
    for (const m of [face, edge]) {
      m.castShadow = true;
      m.receiveShadow = true;
    }
    const lift = new THREE.Group();
    lift.add(face, edge);
    const base = new THREE.Group();
    base.position.set(s.x, -s.y, s.z0 ?? 0.08);
    base.add(lift);
    panel.group.add(base);
    this.sticker = { base, lift, mats: [face.material, edge.material], t: 0, H: s.height || 80, anim: null };
    this.sticker.t = this.state === 'closed' && !this.tween ? 1 : 0;
    this._stickerApply();
  }

  clearSticker() {
    const s = this.sticker;
    if (!s) return;
    s.base.parent?.remove(s.base);
    s.base.traverse((o) => {
      o.geometry?.dispose();
      if (o.material) {
        o.material.map?.dispose();
        o.material.dispose();
      }
    });
    this.sticker = null;
  }

  _stickerApply() {
    const s = this.sticker;
    if (!s) return;
    const t = clamp01(s.t);
    const e = 1 - (1 - t) ** 3;
    s.lift.visible = t > 0.002;
    s.lift.position.z = s.H * (1 - e);
    const squash = t > 0.86 ? Math.sin(Math.PI * clamp01((t - 0.86) / 0.14)) : 0;
    s.lift.scale.set(1 + squash * 0.035, 1 + squash * 0.035, 1 - squash * 0.3);
    const op = clamp01(t * 2.4);
    for (const m of s.mats) {
      m.opacity = op;
      m.transparent = op < 0.999;
      m.depthWrite = op > 0.5;
    }
    this.invalidate();
  }

  _stickerTo(to, seconds, done) {
    const s = this.sticker;
    if (!s || (Math.abs(s.t - to) < 0.001 && !s.anim)) {
      done?.();
      return;
    }
    s.anim = { from: s.t, to, t0: performance.now(), dur: seconds * 1000 * Math.max(0.25, Math.abs(to - s.t)), done };
    this.invalidate();
  }

  _stickerStep(now) {
    const s = this.sticker;
    const a = s?.anim;
    if (!a) return;
    const k = clamp01((now - a.t0) / a.dur);
    s.t = a.from + (a.to - a.from) * k;
    this._stickerApply();
    if (k >= 1) {
      s.anim = null;
      a.done?.();
    }
  }

  // Animates to a named state. With a sticker on, it lifts off first and lands after closing.
  go(state, opts = {}) {
    const s = this.sticker;
    if (s && opts.instant) {
      s.anim = null;
      s.t = state === 'closed' ? 1 : 0;
      this._stickerApply();
      return this._go(state, opts);
    }
    if (s && this.current && state !== 'closed' && (s.t > 0.001 || s.anim)) {
      this._pendingGo = [state, opts];
      if (s.anim && s.anim.to === 0) {
        s.anim.done = () => this._flushGo();
        return;
      }
      this._stickerTo(0, 0.6, () => this._flushGo());
      return;
    }
    if (s && state === 'closed' && this.state === 'closed' && !this.tween) {
      this._go(state, opts);
      this._stickerTo(1, 0.85);
      return;
    }
    return this._go(state, opts);
  }

  _flushGo() {
    const p = this._pendingGo;
    this._pendingGo = null;
    if (p) this._go(p[0], p[1]);
  }

  _go(state, { instant = false, duration } = {}) {
    const to = this._info(state);
    if (instant || !this.current) {
      this.tween = null;
      this.state = state;
      this.model.apply(to.vec);
      this.current = { vec: to.vec, q: to.q.clone(), c: to.c.clone(), lift: to.lift };
      this._setRig(to.q, to.c, to.lift);
      this._placeCam(to.cam);
      this.userMoved = false;
      this.invalidate();
      this.onState?.(state);
      return;
    }
    const from = this.current;
    const order = { flat: 0, inside: 0, closed: 2, open: 1 };
    const rank = (s) => (s === 'closed' ? 2 : s === 'open' ? 1 : 0);
    let dir = rank(state) >= rank(this.state) ? 1 : -1;
    if (order[state] === undefined) dir = 1;
    const win = this.model.windows(from.vec, to.vec, dir);
    const poseAngle = from.q.angleTo(to.q);
    const flip = poseAngle > 60 * DEG;
    const folds = win.steps > 0 && from.vec.some((v, i) => Math.abs(v - to.vec[i]) > 0.01);
    const base = folds ? Math.min(4.2, 0.95 + win.steps * 0.5) : 1.1;
    const dur = duration ?? base + (flip && folds ? 0.45 : 0);
    let poseWin = [0, 1];
    let foldWin = [0, 1];
    if (flip && folds) {
      if (dir > 0) {
        poseWin = [0, 0.26];
        foldWin = [0.2, 1];
      } else {
        poseWin = [0.74, 1];
        foldWin = [0, 0.8];
      }
    }
    this.tween = {
      t0: performance.now(),
      dur: dur * 1000,
      from,
      to,
      win,
      poseWin,
      foldWin,
      cam0: this._currentCam(),
      cam1: to.cam,
      state,
      flip,
    };
    // Shortest way round for the azimuth.
    let da = this.tween.cam1.az - this.tween.cam0.az;
    while (da > 180) da -= 360;
    while (da < -180) da += 360;
    this.tween.azDelta = da;
    this.state = state;
    this.userMoved = false;
    this.controls.enabled = false;
    this.onStart?.(state);
    this.invalidate();
  }

  // Scrubs the fold directly: 0 is the flat sheet, 1 is fully folded.
  scrub(p) {
    if (!this.model) return;
    const a = this._info('flat');
    const b = this._info('closed');
    if (!this.scrubWin) this.scrubWin = this.model.windows(a.vec, b.vec, 1);
    this.tween = null;
    this.controls.enabled = true;
    const flip = a.q.angleTo(b.q) > 60 * DEG;
    const poseT = flip ? clamp01(p / 0.26) : p;
    const foldT = flip ? clamp01((p - 0.2) / 0.8) : p;
    const vec = a.vec.map((v, i) => {
      const [w0, w1] = this.scrubWin.list[i];
      return v + (b.vec[i] - v) * ease(clamp01((foldT - w0) / (w1 - w0)));
    });
    this._applyMix(a, b, vec, ease(poseT), ease(foldT), flip);
    const cam = this._mixCam(a.cam, b.cam, ease(p));
    this._placeCam(cam);
    this.state = p <= 0.001 ? 'flat' : p >= 0.999 ? 'closed' : 'custom';
    if (this.sticker) this._stickerTo(p >= 0.999 ? 1 : 0, p >= 0.999 ? 0.85 : 0.4);
    this.invalidate();
  }

  _mixCam(c0, c1, t, azDelta) {
    let da = azDelta;
    if (da === undefined) {
      da = c1.az - c0.az;
      while (da > 180) da -= 360;
      while (da < -180) da += 360;
    }
    return {
      az: c0.az + da * t,
      el: c0.el + (c1.el - c0.el) * t,
      d: c0.d + (c1.d - c0.d) * t,
      target: c0.target.clone().lerp(c1.target, t),
    };
  }

  _applyMix(a, b, vec, poseT, foldT, flip) {
    this.model.apply(vec);
    const q = a.q.clone().slerp(b.q, poseT);
    const c = a.c.clone().lerp(b.c, foldT);
    let lift = a.lift + (b.lift - a.lift) * foldT;
    if (flip) {
      // Lift the sheet while it turns over so it never cuts through the floor.
      lift += Math.sin(Math.PI * poseT) * this.flipR(a, b);
    }
    this.current = { vec, q, c, lift };
    this._setRig(q, c, lift);
  }

  flipR(a, b) {
    let r = 0;
    for (const v of a.corners) r = Math.max(r, Math.hypot(v.x, v.z));
    for (const v of b.corners) r = Math.max(r, Math.hypot(v.x, v.z));
    return r * 0.72;
  }

  _step(now) {
    const tw = this.tween;
    if (!tw) return;
    const t = clamp01((now - tw.t0) / tw.dur);
    const foldT = clamp01((t - tw.foldWin[0]) / (tw.foldWin[1] - tw.foldWin[0]));
    const poseT = clamp01((t - tw.poseWin[0]) / (tw.poseWin[1] - tw.poseWin[0]));
    const vec = tw.from.vec.map((v, i) => {
      const [w0, w1] = tw.win.list[i];
      return v + (tw.to.vec[i] - v) * ease(clamp01((foldT - w0) / (w1 - w0)));
    });
    const fromInfo = { q: tw.from.q, c: tw.from.c, lift: tw.from.lift, corners: this._info(tw.state).corners };
    this._applyMix(fromInfo, tw.to, vec, ease(poseT), ease(foldT), tw.flip);
    this._placeCam(this._mixCam(tw.cam0, tw.cam1, ease(t), tw.azDelta));
    this.invalidate();
    if (t >= 1) {
      this.tween = null;
      this.scrubWin = null;
      this.current = { vec: tw.to.vec, q: tw.to.q.clone(), c: tw.to.c.clone(), lift: tw.to.lift };
      this.controls.enabled = true;
      this.onState?.(tw.state);
      if (tw.state === 'closed' && this.sticker) this._stickerTo(1, 0.85);
    }
  }

  // ---- interaction ---------------------------------------------------------------------------

  pick(clientX, clientY) {
    if (!this.model?.pickables) return null;
    const r = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.ray.setFromCamera(ndc, this.camera);
    const hit = this.ray.intersectObjects(this.model.pickables, false)[0];
    if (!hit) return null;
    const m = hit.object.userData.side === 'back' ? 1 : (hit.face?.materialIndex ?? 0);
    return { panel: hit.object.userData.panel, side: m === 1 ? 'back' : 'front', point: hit.point };
  }

  zoom(f) {
    const c = this._currentCam();
    c.d *= f;
    this._placeCam(c);
    this.invalidate();
  }

  resetView() {
    this.userMoved = false;
    this.go(this.state === 'custom' ? 'closed' : this.state, { duration: 0.8 });
  }

  spin(on) {
    this.spinOn = on;
    this.invalidate();
  }

  stopSpin() {
    if (this.spinOn) {
      this.spinOn = false;
      this.onSpinStop?.();
    }
  }

  capture() {
    this.renderer.render(this.scene, this.camera);
    return this.renderer.domElement;
  }

  _tick() {
    this._raf = requestAnimationFrame(this._tick);
    if (document.hidden) return;
    const now = performance.now();
    if (this.sticker?.anim) this._stickerStep(now);
    if (this.tween) this._step(now);
    if (this.spinOn && !this.tween) {
      const c = this._currentCam();
      c.az += 0.12;
      this._placeCam(c);
      this.needs = true;
    }
    if (this.controls.enabled) this.controls.update();
    if (this.needs) {
      this.needs = false;
      this.renderer.render(this.scene, this.camera);
      this.frames = (this.frames || 0) + 1;
    }
  }

  dispose() {
    cancelAnimationFrame(this._raf);
    this.ro.disconnect();
    this.controls.dispose();
    if (this.model) this.model.dispose?.();
    this.renderer.dispose();
    this.envRT.dispose();
    this.renderer.domElement.remove();
  }
}
