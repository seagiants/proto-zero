import React from 'react';
import Card from './Card';
import uniqueId from 'lodash.uniqueid';

const Hand = (props) =>
  <div>
    {
      props.cards.map((card) =>
        <Card
          key={uniqueId(card.name)}
          card={card} />
      )
    }
  </div>;

export default Hand;
