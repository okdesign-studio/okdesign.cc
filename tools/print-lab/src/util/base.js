// The folder the viewer script was loaded from. pdf.js, the catalogue thumbnails and the proof
// runtime sit next to it, so the same build works from /viewer/ on the site or from a local copy.
export function scriptBase() {
  const s = document.querySelector('script[src*="viewer.js"], script[src*="print-lab.js"]');
  return s ? new URL('.', s.src).href : '/viewer/';
}
