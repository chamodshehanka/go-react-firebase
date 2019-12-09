import React, { Component } from 'react';
import Person from './Person';

class Landing extends Component {
  state = {
    persons: [
      { name: 'Chamod', age: 10 },
      { name: 'Shehanka', age: 70 },
      { name: 'Perera', age: 50 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.persons.map(e => (
          <Person name={e.name} age={e.age} />
        ))}
      </div>
    );
  }
}

export default Landing;
