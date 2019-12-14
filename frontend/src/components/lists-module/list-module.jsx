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

  const nameHandler = (event, index) => {
    const personIndex = personState.persons.findIndex(p => {
      return p.id === index;
    });

    const person = { ...personState.persons[personIndex] };

    // const person = Object.assign({}, personState.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIndex] = person;

    setPersonState({
      persons: persons,
      showPersons: true
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

  // Delete function
  const deletePersonHandler = personIndex => {
    const persons = personState.persons;
    persons.splice(personIndex, 1);
    setPersonState({
      persons: persons,
      showPersons: true
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
          {personState.persons.map((e, i) => {
            return (
              <Person
                key={e.id}
                name={e.name}
                degree={e.degree}
                changed={event => nameHandler(event, i)}
                delete={() => deletePersonHandler(i)}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ListModule;
