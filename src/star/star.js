export const star = ({ color, velocity, speed, v }) => {
  const { x, y, z } = v;

  return {
    velocity,
    color,
    speed,
    x,
    y,
    z,
    v,
  };
};
