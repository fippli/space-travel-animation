import { random } from "../utils/random.js";

export const getColor = () => "hsla(200,100%, " + random(50, 100) + "%, 1)";
