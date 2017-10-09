import React from "react";
import { connect } from "react-redux";
import { clickOnPowerCase } from "../actions";
import { powerSize } from "../constants";
import { getActivePower } from "../engine/powerLogic";

const rectStyles = powerCase => {
  const activePower = getActivePower(powerCase);
  return {
    fill: powerCase.isTapped
      ? activePower.category.tappedColor
      : activePower.category.color,
    cursor: "pointer"
  };
};

const textStyles = powerCase => {
  const activePower = getActivePower(powerCase);
  return {
    fill: powerCase.isTapped
      ? activePower.category.tappedAltColor
      : activePower.category.altColor,
    cursor: "pointer",
    fontSize: "3em"
  };
};

const textTransform = text => {
  const firstPart = text.substring(0, 1);
  const secondPart = text.substring(1, 3).toLowerCase();
  return `${firstPart}${secondPart}`;
};

const clickWrapper = (e, powerCase, player, click) => {
  e.preventDefault();
  console.log(
    `clicking on a ${getActivePower(powerCase).powerName} power tile`
  );
  click(player, powerCase);
};

const costSymbole = () => {
  const x = powerSize.x + powerSize.width*0.85
  const y = powerSize.y + powerSize.height*0.75
  const transformValue = `translate(${x},${y})`;
  return(
    <path d="M 0 0, 5 5,0 10,-5 5" fill="white" transform={transformValue}></path>
  )
}

const costTriangle = () => {
  const x = powerSize.x + powerSize.width*0.40
  const y = powerSize.y + powerSize.height*1
  const transformValue = `translate(${x},${y})`;
  const dValue = `M 0 0,${powerSize.width*0.60} 0,${powerSize.width*0.60} ${powerSize.height*(-0.60)}`
  return(
  <path d={dValue} transform={transformValue} fill="gray" stroke="black"/>
  )
}

// FIXME - activePower should be a prop of the component (useless multiple calls in the comp&action)
const PowerCase = ({ powerCase, player, card, click }) => {
  const powerText =
    card == null ? powerCase.defaultPower.powerName : card.powerName;
  return (
    <svg
      width={powerSize.boxFactor * powerSize.width}
      height={powerSize.boxFactor * powerSize.height}
    >
    <rect
         x={powerSize.x}
         y={powerSize.y}
         width={powerSize.width}
         height={powerSize.height}
         style={rectStyles(powerCase)} stroke="black"
         />
         {costTriangle()}
         <text x={powerSize.costTextX(powerSize)} y={powerSize.costTextY(powerSize)}>{getActivePower(powerCase).powerProps.cost}</text>
         {costSymbole()}
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        textAnchor="middle"
        style={textStyles(powerCase)}
      >
        {textTransform(powerText)}
      </text>
      <rect onClick={e => clickWrapper(e, powerCase, player, click)} x={powerSize.x} y={powerSize.y} width={powerSize.width} height={powerSize.height}
           stroke="#fff" fill="#fff" fillOpacity="0" strokeOpacity="0"/>
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
