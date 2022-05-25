export default function (x, y) {
  return {
    x: x + window.scrollX,
    y: y + window.scrollY,
  };
}
