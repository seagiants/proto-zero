import React from "react";
import { connect } from "react-redux";
import { powerSelection, noAction } from "../actions";
import { powerSize } from "../constants";


//FIXME Maybe better as a prop of the component even with redunduncy.
const getActivePower = powerCase => {
  if (powerCase.card !== null && powerCase.card !== undefined) {
    return powerCase.card;
  } else {
    return powerCase.defaultPower;
  }
};

const rectStyles = powerCase => ({
  fill: getActivePower(powerCase).category.color,
  cursor: "pointer"
});

const textStyles = powerCase => ({
  fill: getActivePower(powerCase).category.altColor,
  cursor: "pointer",
  fontSize: "3em"
});

const textTransform = (text) => {
  const firstPart = text.substring(0,1);
  const secondPart = text.substring(1,3).toLowerCase();
  return `${firstPart}${secondPart}`;
}

const clickWrapper = (e, powerCase, player, click) => {
  e.preventDefault();
  console.log(`clicking on a ${powerCase.powerName} power tile`);
  click(player, powerCase);
};

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
    /*Click function :
      First check isTapped => noAction
      Second check isTargetRequired => powerAction
      Default => powerSelection
      FIXME - This implementation should be elsewhere...
    */
    click: (player, powerCase) => {
      console.log(getActivePower(powerCase).powerProps.isTargetRequired);
      if (powerCase.isTapped){
        dispatch(noAction(player))
      }else{
        const activePower = getActivePower(powerCase);
        if (!activePower.powerProps.isTargetRequired) {
          dispatch(activePower.powerAction(player, activePower.powerProps));
        } else {
          dispatch(powerSelection(player, powerCase, activePower.powerProps));
        }
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PowerCase);
