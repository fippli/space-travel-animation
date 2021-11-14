import { half } from "../utils/half.js";
import { random } from "../utils/random.js";

const WARP_Z = 12;

export const starVector = (canvas) => ({
  x: random(-half(canvas.width), half(canvas.width)),
  y: random(-half(canvas.height), half(canvas.height)),
  z: random(1, WARP_Z),
});
