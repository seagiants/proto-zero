import { cardLibrary, upgradedCardLibrary } from "../libraries/cardLib.js";
import random from "lodash.random";

export const shuffleCards = cards => {
  console.log(cards);
  return cards.slice(0).sort((a, b) => 0.5 - random(1));
};
export const drawCards = (size, deckState) => {
  let newDeckState =
    deckState.draw.length < size ? reShuffleDiscard(deckState) : deckState;
  let draw = newDeckState.draw.slice(size);
  let toPick = newDeckState.draw.slice(0, size);
  let discard = newDeckState.discard.concat(deckState.toPick);
  return {
    draw: draw,
    toPick: toPick,
    discard: discard
  };
};

export const reShuffleDiscard = deckState => ({
  draw: deckState.draw.concat(
    deckState.discard.sort((a, b) => 0.5 - random(1))
  ),
  toPick: deckState.toPick,
  discard: []
});

export const generateCard = cardTemplate => {
  return { ...cardTemplate };
};

export const randCard = () => cardLibrary[random(cardLibrary.length - 1)];

export const getCard = name =>
  cardLibrary.filter(element => element.powerName === name)[0];

export const getUpgradedCard = name =>
  upgradedCardLibrary.filter(element => element.powerName === name)[0];

export const addUpgradedCardToDraw = (draw, upgradedCard) =>
  shuffleCards(draw.concat([getUpgradedCard(upgradedCard)]));

export const generateDeck = () => ({
  draw: cardLibrary
    .map(card => generateCard(card))
    .sort((a, b) => 0.5 - random(1)),
  toPick: [],
  discard: []
});
