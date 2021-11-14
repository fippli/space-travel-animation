export const outside = (canvas, { x, y }) =>
  x < -half(canvas.width) ||
  x > half(canvas.width) ||
  y < -half(canvas.height) ||
  y > half(canvas.height);
