// Unit size in pixels
const unitSize = 32;

export function snapToGrid(x, y) {
  const snappedX = Math.round(x / unitSize) * unitSize
  const snappedY = Math.round(y / unitSize) * unitSize
  
  return [snappedX, snappedY]
}

function showGrid(w, h){
  const snappedX = Math.round(w / unitSize) * unitSize
  const snappedY = Math.round(h / unitSize) * unitSize
  
  return [snappedX, snappedY]
}