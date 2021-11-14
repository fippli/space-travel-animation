import { centerOf } from "../utils/centerOf.js";

export const resetCanvas = (canvas) => {
  const context = canvas.getContext("2d");
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.fillStyle = "rgba(0,0,0,0.2)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.translate(...centerOf(canvas));
};
