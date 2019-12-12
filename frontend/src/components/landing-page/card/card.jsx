import React from 'react';
import './card.css';

const Card = props => {
  return (
    <div>
      <div className='card card-width'>
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{props.subtitle}</h6>
          <p className='card-text'>{props.text}</p>
          <a href={props.link} className='card-link btn btn-primary'>
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
