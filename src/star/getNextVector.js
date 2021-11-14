import { addVector } from "../utils/addVector.js";

export const getNextStarVector = ({ v, velocity, speed }) => {
  const { x: x2, y: y2, z: z2 } = addVector(v, velocity);
  return {
    x: x2 / z2,
    y: y2 / z2,
    dx: x2 / (z2 + speed * 0.5),
    dy: y2 / (z2 + speed * 0.5),
    nextVector: addVector(v, velocity),
  };
};
