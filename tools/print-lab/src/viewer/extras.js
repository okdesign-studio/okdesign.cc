// Small physical details that are not part of the sheet: strings, ropes, staples, wire, film.

import * as THREE from 'three';

const metal = () => new THREE.MeshStandardMaterial({ color: '#c9cacd', metalness: 1, roughness: 0.32 });
const shown = (s) => (s === 'flat' || s === 'inside' ? 0 : 1);

function pathMesh(points, radius, material, segs = 80) {
  const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5);
  const m = new THREE.Mesh(new THREE.TubeGeometry(curve, segs, radius, 8, false), material);
  m.castShadow = true;
  return m;
}

export function attachExtras(model, die, surface) {
  const t = model.t;
  const rootNode = model.nodes[0];
  for (const e of die.extras) {
    const parent = e.panel ? model.byId[e.panel] : rootNode;
    if (e.type === 'stack') {
      // A few more printed copies under the first one. It says "this comes in a batch".
      const group = new THREE.Group();
      parent.group.add(group);
      const c = rootNode.panel.centroid;
      const items = [];
      let s = 4;
      const rnd = () => {
        s = (s * 16807) % 2147483647;
        return (s % 2000) / 1000 - 1;
      };
      for (let i = 0; i < e.count; i++) {
        const m = new THREE.Mesh(rootNode.mesh.geometry, model.materials);
        m.castShadow = true;
        m.receiveShadow = true;
        const piv = new THREE.Group();
        piv.position.set(c[0], -c[1], 0);
        m.position.set(-c[0], c[1], 0);
        piv.add(m);
        group.add(piv);
        items.push({ piv, dx: rnd() * e.spread, dy: rnd() * e.spread, rz: rnd() * 0.022, i });
      }
      const step = Math.max(t * 1.02, 0.01);
      const idx = model.channels.length;
      model.channels.push({
        seq: 1,
        value: shown,
        apply(v) {
          group.visible = v > 0.01;
          for (const it of items) {
            it.piv.position.set(c[0] + it.dx * v, -c[1] + it.dy * v, -(it.i + 1) * step);
            it.piv.rotation.z = it.rz * v;
          }
        },
      });
      model.extraBounds = model.extraBounds || [];
      model.extraBounds.push((vec) => {
        const v = vec[model.nodes.length + idx] ?? 0;
        const b = new THREE.Box3();
        b.min.set(0, -die.h, -(e.count + 1) * step * (v > 0.01 ? 1 : 0));
        b.max.set(die.w, 0, 0);
        return b;
      });
    } else if (e.type === 'string') {
      const [x, y] = e.at;
      const L = e.len;
      const mat = new THREE.MeshStandardMaterial({ color: e.color || '#d8cdb8', roughness: 0.9 });
      const z = 0.6;
      const pts = [
        [x, -y, -t - 0.2],
        [x, -y, z],
        [x + L * 0.1, -y + L * 0.12, z + 0.2],
        [x + L * 0.34, -y + L * 0.42, z + 0.3],
        [x + L * 0.3, -y + L * 0.66, z + 0.3],
        [x + L * 0.02, -y + L * 0.62, z + 0.3],
        [x - L * 0.2, -y + L * 0.44, z + 0.25],
        [x - L * 0.06, -y + L * 0.14, z + 0.2],
        [x, -y, z],
      ].map((p) => new THREE.Vector3(...p));
      const m = pathMesh(pts, Math.max(0.35, L * 0.005), mat);
      parent.group.add(m);
      model.channels.push({ seq: 1, value: shown, apply: (v) => (m.visible = v > 0.5) });
    } else if (e.type === 'rope') {
      const p = parent.panel;
      const b = p.bounds;
      const cx = b.x0 + b.w / 2;
      const top = -b.y0;
      const hw = e.span / 2;
      const r = e.radius || Math.max(1.8, e.width * 0.0075);
      const mat = new THREE.MeshStandardMaterial({ color: e.color || '#1b1b1d', roughness: 0.8 });
      const zz = 2;
      const tilt = e.tilt ?? 0;
      const pts = [
        [cx - hw, top - 34, zz * 0 - t - 1],
        [cx - hw, top - 18, zz],
        [cx - hw * 1.02, top + e.drop * 0.34, zz + tilt * 0.4],
        [cx - hw * 0.72, top + e.drop * 0.82, zz + tilt * 0.8],
        [cx, top + e.drop, zz + tilt],
        [cx + hw * 0.72, top + e.drop * 0.82, zz + tilt * 0.8],
        [cx + hw * 1.02, top + e.drop * 0.34, zz + tilt * 0.4],
        [cx + hw, top - 18, zz],
        [cx + hw, top - 34, -t - 1],
      ].map((q) => new THREE.Vector3(...q));
      const m = pathMesh(pts, r, mat, 96);
      const piv = new THREE.Group();
      piv.position.set(cx, top, 0);
      m.position.set(-cx, -top, 0);
      piv.add(m);
      parent.group.add(piv);
      const ropeIdx = model.channels.length;
      model.extraBounds = model.extraBounds || [];
      model.extraBounds.push((vec) => {
        const box = new THREE.Box3();
        if ((vec[model.nodes.length + ropeIdx] ?? 0) > 0.5) {
          box.min.set(cx - hw, top, -2);
          box.max.set(cx + hw, top + e.drop, 2);
        }
        return box;
      });
      // Eyelets
      for (const sx of [-hw, hw]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(r * 1.9, r * 0.5, 10, 28), metal());
        ring.position.set(cx + sx, top - 26, 0.5);
        parent.group.add(ring);
      }
      model.channels.push({
        seq: 8,
        value: shown,
        apply(v) {
          piv.visible = v > 0.02;
          piv.scale.set(1, Math.max(0.02, v), 1);
        },
      });
    } else if (e.type === 'film') {
      const r = e.rect;
      const g = new THREE.PlaneGeometry(r.w + 6, r.h + 6);
      const m = new THREE.Mesh(
        g,
        new THREE.MeshPhysicalMaterial({
          color: '#ffffff',
          transparent: true,
          opacity: 0.22,
          roughness: 0.12,
          side: THREE.DoubleSide,
          depthWrite: false,
        }),
      );
      m.position.set(r.x + r.w / 2, -(r.y + r.h / 2), -t - 0.03);
      parent.group.add(m);
    } else if (e.type === 'staples') {
      const mat = metal();
      for (const y of e.ys) {
        const g = new THREE.CapsuleGeometry(0.28, e.len, 4, 8);
        const m = new THREE.Mesh(g, mat);
        m.position.set(e.x, -y, 0.08);
        m.castShadow = true;
        parent.group.add(m);
      }
    } else if (e.type === 'wire') {
      const mat = new THREE.MeshStandardMaterial({ color: e.color || '#16161a', metalness: 0.8, roughness: 0.35 });
      const [x0, y0] = e.a;
      const [x1, y1] = e.b;
      const n = Math.max(2, Math.floor(Math.hypot(x1 - x0, y1 - y0) / e.pitch));
      const R = e.r;
      const g = new THREE.TorusGeometry(R, Math.max(0.32, R * 0.075), 8, 32);
      const inst = new THREE.InstancedMesh(g, mat, n * 2);
      const dummy = new THREE.Object3D();
      const horizontal = Math.abs(y1 - y0) < Math.abs(x1 - x0);
      for (let i = 0; i < n; i++) {
        const k = (i + 0.5) / n;
        for (let j = 0; j < 2; j++) {
          const off = j ? e.pitch * 0.16 : -e.pitch * 0.16;
          dummy.position.set(
            x0 + (x1 - x0) * k + (horizontal ? off : 0) + (e.ox || 0),
            -(y0 + (y1 - y0) * k + (horizontal ? 0 : off) + (e.oy || 0)),
            e.z ?? -e.h / 2,
          );
          dummy.rotation.set(horizontal ? 0 : 0, horizontal ? Math.PI / 2 : 0, 0);
          dummy.rotation.set(horizontal ? 0 : Math.PI / 2, horizontal ? Math.PI / 2 : 0, 0);
          dummy.updateMatrix();
          inst.setMatrixAt(i * 2 + j, dummy.matrix);
        }
      }
      inst.castShadow = true;
      inst.frustumCulled = false;
      parent.group.add(inst);
      model.channels.push({ seq: 1, value: e.always ? () => 1 : shown, apply: (v) => (inst.visible = v > 0.5) });
    } else if (e.type === 'block') {
      // Plain product or carton inside a printed sleeve.
      const b = new THREE.Mesh(
        new THREE.BoxGeometry(e.size[0], e.size[1], e.size[2]),
        new THREE.MeshStandardMaterial({ color: e.color || '#d8d4ca', roughness: 0.75 }),
      );
      b.castShadow = true;
      b.position.set(e.pos[0], e.pos[1], e.pos[2]);
      parent.group.add(b);
      const idx = model.channels.length;
      model.extraBounds = model.extraBounds || [];
      model.extraBounds.push((vec) => {
        const box = new THREE.Box3();
        if ((vec[model.nodes.length + idx] ?? 0) > 0.5) {
          box.min.set(e.pos[0] - e.size[0] / 2, e.pos[1] - e.size[1] / 2, e.pos[2] - e.size[2] / 2);
          box.max.set(e.pos[0] + e.size[0] / 2, e.pos[1] + e.size[1] / 2, e.pos[2] + e.size[2] / 2);
        }
        return box;
      });
      model.channels.push({
        seq: e.seq || 3,
        value: shown,
        apply(v) {
          b.visible = v > 0.01;
          b.position.x = e.pos[0] + (1 - v) * (e.size[0] * 1.2);
        },
      });
    } else if (e.type === 'insert') {
      // A loose card that shows the format in use: letter in an envelope, sheet in a pocket.
      const p = parent.panel;
      const b = p.bounds;
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(e.size[0], e.size[1], Math.max(0.3, t)),
        new THREE.MeshStandardMaterial({ color: '#fbfaf6', roughness: 0.65 }),
      );
      m.castShadow = true;
      m.receiveShadow = true;
      const cx = b.x0 + b.w / 2;
      const cy = -(b.y0 + b.h / 2);
      m.position.set(cx, cy, -t - (e.z ?? 0.4));
      parent.group.add(m);
      model.channels.push({
        seq: 9,
        value: (s) => (s === 'open' ? 1 : 0),
        apply(v) {
          m.visible = v > 0.01;
          m.position.y = cy - (e.at === 'pocket' ? (b.h - e.size[1]) / 2 * (1 - v) * -1 + (b.h - e.size[1]) / 2 : 0) + (e.rise || 0) * v;
        },
      });
    } else if (e.type === 'custom') {
      e.build(model, parent, surface);
    }
  }
}
