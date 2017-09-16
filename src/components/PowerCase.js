import React from "react";
import { connect } from "react-redux";
import { clickOnPowerCase } from "../actions";
import { powerSize } from "../constants";
import { getActivePower } from "../engine/powerLogic";


const rectStyles = powerCase => {
  const activePower = getActivePower(powerCase);
  return {
  fill: powerCase.isTapped ? activePower.category.altColor : activePower.category.color,
  cursor: "pointer"
  };
};

const textStyles = powerCase => {
  const activePower = getActivePower(powerCase);
  return {
  fill: powerCase.isTapped ? activePower.category.color : activePower.category.altColor,
  cursor: "pointer",
  fontSize: "3em"
  };
};

const textTransform = (text) => {
  const firstPart = text.substring(0,1);
  const secondPart = text.substring(1,3).toLowerCase();
  return `${firstPart}${secondPart}`;
}

const clickWrapper = (e, powerCase, player, click) => {
  e.preventDefault();
  console.log(`clicking on a ${getActivePower(powerCase).powerName} power tile`);
  click(player, powerCase);
};

// FIXME - activePower should be a prop of the component (useless multiple calls in the comp&action)
const PowerCase = ({ powerCase, player, card, click }) => {
  const powerText = card == null ? powerCase.defaultPower.powerName : card.powerName;
  return (
    <svg
      width={powerSize.boxFactor * powerSize.width}
      height={powerSize.boxFactor * powerSize.height}
    >
      <rect
        x="20"
        y="20"
        width={powerSize.width}
        height={powerSize.height}
        style={rectStyles(powerCase)}
        onClick={e => clickWrapper(e, powerCase, player, click)}
      />
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        textAnchor="middle"
        style={textStyles(powerCase)}
        onClick={e => clickWrapper(e, powerCase, player, click)}
      >
        {textTransform(powerText)}
      </text>
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
    click: (player,powerCase) => {
      dispatch(clickOnPowerCase(player,powerCase))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PowerCase);
