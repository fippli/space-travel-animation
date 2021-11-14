import { outside } from "./outside.js";
import { starVector } from "./starVector.js";

export const resetStar = (canvas) =>
  (star) => {
    const {
      dv: { x, y, nextVector },
    } = star;

    if (outside(canvas, { x, y })) {
      return { ...star, v: starVector(canvas) };
    } else {
      return { ...star, v: nextVector };
    }
  };
