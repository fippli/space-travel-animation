import { canvas } from "./canvas.js";

window.onresize = () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
};
