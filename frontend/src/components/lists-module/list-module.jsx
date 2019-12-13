import React, { useState } from 'react';
import NavBar from '../landing-page/NavBar';
import Person from './Person';

const ListModule = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { id: 1, name: 'Lavanga', degree: 'Applied Sciences' },
      { id: 2, name: 'Nuwan', degree: 'Applied Sciences' },
      { id: 3, name: 'Sajeewa', degree: 'Applied Sciences' },
      { id: 4, name: 'Dureksha', degree: 'SE' }
    ],
    showPersons: false
  });

  const nameHandler = e => {
    setPersonState({
      persons: [
        { id: 1, name: 'Lavanga', degree: 'Applied Sciences' },
        { id: 2, name: 'Nuwan', degree: 'Applied Sciences' },
        { id: 3, name: 'Sajeewa', degree: 'Applied Sciences' },
        { id: 4, name: e.target.value, degree: 'SE' }
      ]
    });
  };

  const togglePersonsHandler = () => {
    const doesShow = personState.showPersons;
    setPersonState({
      persons: [
        { id: 1, name: 'Lavanga', degree: 'Applied Sciences' },
        { id: 2, name: 'Nuwan', degree: 'Applied Sciences' },
        { id: 3, name: 'Sajeewa', degree: 'Applied Sciences' },
        { id: 4, name: 'Dureksha', degree: 'SE' }
      ],
      showPersons: !doesShow
    });
  };

  return (
    <div>
      <NavBar />

      <p align='center'>
        <button className='btn btn-warning' onClick={togglePersonsHandler}>
          Toggle Persons
        </button>
      </p>
      {/* Ternary expression */}
      {personState.showPersons ? (
        <div>
          {personState.persons.map(e => (
            <Person
              key={e.id}
              name={e.name}
              degree={e.degree}
              changed={nameHandler}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ListModule;
