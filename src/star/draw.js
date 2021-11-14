export const drawStar = (canvas) =>
  ({ x, y, dx, dy, color }) => {
    const context = canvas.getContext("2d");
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(dx, dy);
    context.stroke();
  };
