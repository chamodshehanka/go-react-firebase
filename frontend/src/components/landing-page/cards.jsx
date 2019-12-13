import React, { useState } from 'react';
import './landing.css';
import Card from './card/card';

const Cards = () => {
  const [cardState, setCardState] = useState({
    cards: [
      {
        id: 1,
        title: 'Person',
        subtitle: 'Perosons List with React Classes',
        text:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
        link: 'persons'
      },
      {
        id: 2,
        title: 'Student',
        subtitle: 'Students List sfc',
        text:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
        link: 'students'
      },
      {
        id: 3,
        title: 'Lists',
        subtitle: 'Rendering Lists & Conditional Content',
        text:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
        link: 'lists'
      }
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
