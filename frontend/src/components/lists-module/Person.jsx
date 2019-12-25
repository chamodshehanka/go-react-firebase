import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = props => {
  const style = {
    '@media(min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className='Person' style={style}>
      <p onClick={props.click}>
        I'm {props.name} I'm studying {props.degree}.
      </p>
      <button className='btn btn-danger' onClick={props.delete}>
        Remove
      </button>
      {/* Two way binding */}
      <input
        className='form-control'
        type='text'
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default Radium(Person);
