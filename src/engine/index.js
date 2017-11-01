import { generateMap } from "./map";
import {
  generatePowerBoard,
  generateBoard,
  drawCards,
  powerIndex
} from "./playerBoard";

export {
  generateMap,
  generateBoard,
  drawCards,
  powerIndex,
  generatePowerBoard
};

export function enhanceProp(powerProp,oldValue,enhancement) {
    let newValue = oldValue+enhancement;
    switch (powerProp) {
      case "cost":
        return (newValue > 0) ? newValue:0;
      default:
        return newValue;
    }
};

export const enhanceProps = (props,enhancement) => {
  console.log(props);
  console.log(enhancement);
  return Object.assign(
    {},
    ...Object.keys(props).map(prop => ({
      [prop]:
          enhancement[prop] !== undefined
            ? enhanceProp(prop,props[prop],enhancement[prop])
            : props[prop]
    }))
  );
};
