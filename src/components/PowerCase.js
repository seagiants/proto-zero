import React from "react";
import { connect } from "react-redux";
import { clickOnPowerCase } from "../actions/actionFlowThunks.js";
import { powerSize, symbolSize } from "../constants";
import { getActivePower } from "../engine/powerLogic";
import { costTriangle, symbols, powerRect, propsSymbols} from "../svg";

//FIXME need a cleaner Implementation
const showPowerProps = (powerProps) => {
  const props = Object.keys(powerProps);
  return props.sort((a,b)=>a==="enhancement"?-Infinity:b==="enhancement"?Infinity:0).map((element,index)=>showProp(powerProps,element,index))
  //console.log(props);
};

//FIXME need a cleaner Implementation
const showProp = (powerProps,prop,index) => {
  const symbol =propsSymbols[prop]!==undefined?
      propsSymbols[prop](powerSize.width*0.2,powerSize.height*(0.45+index*0.15),0.03,powerProps[prop])
      :null
  return (
      <g key={prop}>
      {symbol}
      </g>
    )
};

const rectStyles = powerCase => {
  const activePower = getActivePower(powerCase);
  return {
    fill: powerCase.isTapped
      ? activePower.category.tappedColor
      : activePower.category.color,
    cursor: "pointer"
  };
};

const clickWrapper = (e, powerCase, player, click) => {
  e.preventDefault();
  console.log(
    `clicking on a ${getActivePower(powerCase).powerName} power tile`
  );
  click(player, powerCase);
};


// FIXME - activePower should be a prop of the component (useless multiple calls in the comp&action)
const PowerCase = ({ powerCase, player, card, click }) => {
  /*const powerText =
    card == null ? powerCase.defaultPower.powerName : card.powerName;
*/
  const activePower = getActivePower(powerCase);
  return (
    <svg
      width={powerSize.boxFactor * powerSize.width}
      height={powerSize.boxFactor * powerSize.height}>
      {/*The case's background*/}
      {powerRect(powerSize,rectStyles(powerCase))}
      {/*The background triangle of the cost display*/}
      {costTriangle(powerSize.x,powerSize.y,powerSize.width,powerSize.height)}
      {/*The cost value*/}
      <text x={powerSize.costTextX} y={powerSize.costTextY}>{getActivePower(powerCase).cost}</text>
      {/*The cost symbol*/}
      {symbols.cost(powerSize.x + powerSize.width*0.85,powerSize.y + powerSize.height*0.75,1,"white")}
      {/*The head symbol*/}
      {symbols[activePower.symbol](symbolSize[activePower.symbol].x(powerSize),symbolSize[activePower.symbol].y(powerSize),symbolSize[activePower.symbol].scale(powerSize),"black")}
      {/*Tests*/}
      {/*powerRect({...powerSize,x:powerSize.height*1.4,y:powerSize.width*4.5},{fill:"blue"},0.15)*/}
      {showPowerProps(activePower.powerProps)}
      {/*The shadow clickable background*/}
      <rect onClick={e => clickWrapper(e, powerCase, player, click)} x={powerSize.x} y={powerSize.y} width={powerSize.width} height={powerSize.height}
           stroke="#fff" fill="#fff" fillOpacity="0" strokeOpacity="0" cursor="pointer"/>
    </svg>
  );
};

const mapStateToProps = (state, ownProps) => {
  const player = ownProps.player;
  const index = ownProps.powerCase.defaultPower.category.index;
  const powerCase = state.playersState[player].playerBoard.powerBoard[index];
  return {
    card: powerCase.card,
    isTapped: powerCase.isTapped,
    isSelected: powerCase.isSelected
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    click: (player, powerCase) => {
      dispatch(clickOnPowerCase(player, powerCase));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PowerCase);
