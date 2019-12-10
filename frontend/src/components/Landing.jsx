import React, { Component } from 'react';
import Person from './Person';

class Landing extends Component {
  state = {
    persons: [
      { id: 1, name: 'Chamod', age: 10 },
      { id: 2, name: 'Shehanka', age: 70 },
      { id: 3, name: 'Perera', age: 50 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { id: 1, name: 'Cat', age: 10 },
        { id: 2, name: 'Shehanka', age: 70 },
        { id: 3, name: 'Perera', age: 50 }
      ]
    });
  };

  render() {
    return (
      <div>
        {this.state.persons.map(e => (
          <Person key={e.id} name={e.name} age={e.age} />
        ))}

        <button className='btn btn-primary' onClick={this.switchNameHandler}>
          Switch Name
        </button>
      </div>
    );
  }
}

export default Landing;
