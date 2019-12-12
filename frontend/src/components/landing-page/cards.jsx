import React, { useState } from 'react';
import './landing.css';
import Card from './card/card';

const Cards = () => {
  const [cardState, setCardState] = useState({
    cards: [
      { id: 1, title: 'Person', subtitle: '', text: '', link: 'persons' },
      { id: 2, title: 'Student', subtitle: '', text: '', link: 'students' }
    ]
  });

  return (
    <div className='container card-container'>
      {cardState.cards.map(e => (
        <Card
          key={e.id}
          title={e.title}
          subtitle={e.subtitle}
          text={e.text}
          link={e.link}
        />
      ))}
    </div>
  );
};

export default Cards;
