import React from "react";
import { connect } from "react-redux";
import { powerSelection, noAction } from "../actions";
import { powerSize } from "../constants";

const rectStyles = power => ({
  fill: power.category.color,
  cursor: "pointer"
});

const textStyles = power => ({
  fill: power.category.altColor,
  cursor: "pointer",
  fontSize: "3em"
});

const textTransform = (text) => {
  const firstPart = text.substring(0,1);
  const secondPart = text.substring(1,3).toLowerCase();
  return `${firstPart}${secondPart}`;
}

const clickWrapper = (e, power, player, click) => {
  e.preventDefault();
  console.log(`clicking on a ${power.powerName} power tile`);
  click(player, power);
};

const PowerCase = ({ power, player, card, click }) => {
  const powerText = card == null ? power.powerName : card.name;
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
        style={rectStyles(power)}
        onClick={e => clickWrapper(e, power, player, click)}
      />
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        textAnchor="middle"
        style={textStyles(power)}
        onClick={e => clickWrapper(e, power, player, click)}
      >
        {textTransform(powerText)}
      </text>
    </svg>
  );
};

const getActivePower = power => {
  if (power.card !== null && power.card !== undefined) {
    return power.card;
  } else {
    return power;
  }
};

const mapStateToProps = (state, ownProps) => {
  const player = ownProps.player;
  const index = ownProps.power.category.index;
  const powerBoard = state.playersState[player].playerBoard.powerBoard[index];
  return {
    card: powerBoard.card,
    isTapped: powerBoard.isTapped
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    /*Click function :
      First check isTapped => noAction
      Second check isTargetRequired => powerAction
      Default => powerSelection
      FIXME - This implementation should be elsewhere...
    */
    click: (player, power) => {
      if (power.isTapped){
        dispatch(noAction(player))
      }else{
        const activePower = getActivePower(power);
        if (!activePower.powerProps.isTargetRequired) {
          dispatch(activePower.powerAction(player, activePower.powerProps));
        } else {
          dispatch(powerSelection(player, power, activePower.powerProps));
        }
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PowerCase);
