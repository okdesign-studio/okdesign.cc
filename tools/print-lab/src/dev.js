// Headless entry used by the visual test sheets and the thumbnail renderer.
import * as THREE from 'three';
import { Stage } from './viewer/stage.js';
import { resolve, makeModel, makeSurface, PageSet } from './assemble.js';
import { FORMATS, CATEGORIES, stats } from './catalog.js';
import { computeOrient } from './art/orient.js';
import { templateSVG, templatePDF } from './export/template.js';

window.__lab = { THREE, Stage, resolve, makeModel, makeSurface, PageSet, FORMATS, CATEGORIES, stats, computeOrient, templateSVG, templatePDF };
