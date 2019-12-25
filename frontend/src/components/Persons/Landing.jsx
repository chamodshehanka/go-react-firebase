import React, { Component } from 'react';
import Person from './Person';
import NavBar from '../../components/landing-page/NavBar';

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

  onDelete = e => {
    console.log(e.id);
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className='container'>
          <div className='alert alert-primary' role='alert'>
            <h4 className='alert-heading'>Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className='mb-0'>
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
              <button className='btn btn-success'>Home</button>
            </p>
          </div>
        </div>

        <div className='container'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>Age</th>
                <th scope='col'></th>
              </tr>
            </thead>

            <tbody>
              {this.state.persons.map(e => (
                <Person key={e.id} name={e.name} age={e.age} onDelete={e.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Landing;
