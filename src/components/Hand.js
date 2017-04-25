import React from 'react';
import Card from './Card';
import uniqueId from 'lodash.uniqueid';

const Hand = ({ cards }) => (
  <div>
    {cards.map(card => <Card key={uniqueId(card.name)} card={card} />)}
  </div>
);

export default Hand;
