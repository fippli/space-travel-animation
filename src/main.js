import { resetCanvas } from "./canvas/resetCanvas.js";
import { star } from "./star/star.js";
import { range } from "./utils/range.js";
import { canvas } from "./canvas/canvas.js";
import { initiateCanvas } from "./canvas/initiateCanvas.js";
import { getColor } from "./star/getColor.js";
import { starVector } from "./star/starVector.js";
import { updateStar } from "./star/update.js";
import { resetStar } from "./star/reset.js";
import { starToDrawable } from "./star/toDrawable.js";
import { drawStar } from "./star/draw.js";

const SPEED = 0.075;
const VELOCITY = Object.freeze({ x: 0, y: 0, z: -SPEED });

const render = (canvas, stars) =>
  () => {
    resetCanvas(canvas);
    const nextStars = stars.map(updateStar).map(resetStar(canvas));
    nextStars.map(starToDrawable).forEach(drawStar(canvas));
    requestAnimationFrame(render(canvas, nextStars));
  };

const main = (canvas) => {
  initiateCanvas(canvas);

  const stars = range(200).map((_) =>
    star({
      velocity: VELOCITY,
      speed: SPEED,
      color: getColor(),
      v: starVector(canvas),
    })
  );

  render(canvas, stars)();
};

main(canvas);
