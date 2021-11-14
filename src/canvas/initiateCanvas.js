export const initiateCanvas = (canvas) => {
  const context = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
};
