import React from "react";
import { connect } from "react-redux";
import { powerSelection } from "../actions";

const h = 60;
const w = 40;

const Power = ({ power, player, card, click }) => {
  const powerText = card == null ? power.powerName : card.name;
  return (
    <svg width={3*w} height={3*h} >
    <text x="0"
       y="20"
       id="text4533">{powerText}</text>
    <rect x="20" y="30" width={w} height={h} style={{fill: power.category.color}} onClick={e => {
      e.preventDefault();
      console.log(`clicking on a ${power.powerName} power tile`);
      click(player,power);
    }} />

    </svg>
);
};

const getActivePower = power => {
  if(power.card !== null && power.card !== undefined){
    return power.card;
  }else{
    return power;
  }
};

const mapStateToProps = (state, ownProps) => {
    const player = ownProps.player;
    const index = ownProps.power.category.index;
    return {
    card: state.playersState[player].playerBoard.powerBoard[index].card
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      click: (player, power) => {
        const activePower = getActivePower(power);
        if (!activePower.powerProps.isTargetRequired) {
          dispatch(activePower.powerAction(player, activePower.powerProps));
        }else{
          dispatch(powerSelection(player, power, activePower.powerProps));
        }
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Power);
