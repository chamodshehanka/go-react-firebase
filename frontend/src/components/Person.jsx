import React from 'react';

const Person = props => {
  return (
    <tr>
      <th scope='row'>{props.id}</th>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>
        <button className='btn btn-primary'>Edit</button>{' '}
        <button
          className='btn btn-danger'
          
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Person;
