import React, { Component } from 'react';
import Person from './Persons/Person';

class NavBar extends Component {
  state = {
    persons: [
        {name: 'Chamod', age: 5}
    ]
  };
  render() {
    return (
      <div>
        <Person name={this.state.persons.name} age={this.state.persons.age} />
      </div>
    );
  }
}

export default NavBar;
