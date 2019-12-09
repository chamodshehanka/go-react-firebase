import React, { Component } from 'react';
import Person from './Persons/Person';

class Content extends Component {
  state = {
    persons: [
      { name: 'Chamod', age: 5 },
      { name: 'Shehanka', age: 15 },
      { name: 'Perera', age: 25 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.persons.map(() => {
          <Person
            name={this.state.persons.name}
            age={this.state.persons.age}
          />;
        })}
        {/* <Person name={this.state.persons.name} age={this.state.persons.age} /> */}
      </div>
    );
  }
}

export default Content;
