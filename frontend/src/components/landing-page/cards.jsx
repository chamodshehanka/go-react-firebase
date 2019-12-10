import React, {useState} from 'react';
import './landing.css';
import Card from './card/card';

const Cards = () => {
  const [cardState, setCardState] = useState({
    cards: [
      { id: 1, title: 'Person', subtitle: '', text: '' },
      { id: 2, title: 'Student', subtitle: '', text: '' }
    ]
  });

  return (
    <div className='container card-container'>
      {cardState.cards.map(e => (
        <Card key={e.id} title={e.title} subtitle={e.subtitle} text={e.text} />
      ))}
    </div>
  );
};

export default Cards;
