import { getNextStarVector } from "./getNextVector.js";

export const updateStar = (star) => ({ ...star, dv: getNextStarVector(star) });
