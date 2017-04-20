import random from "lodash.random";
import range from "lodash.range";

const types = [
  {name: "river", color: "blue"},
  {name: "mountain", color: "grey"},
  {name: "grass", color: "green"}
];

const randType = () => types[random(types.length - 1)];

/* Generate an x by y matrix, each cell being of a particular type */
export const generateMap = (x, y) => {
  let map = [];
  for (let i in range(x)) {
    map.push([]);
    for (let _ in range(y)) {
      map[i].push(randType());
    }
  }
  return map;
};
