import React, { useState } from 'react';
import Student from './Student';

const StudentsList = props => {
  const [studentsState, setStudentsState] = useState({
    students: [
      { id: 1, name: 'Lavanga', degree: 'Applied Sciences' },
      { id: 2, name: 'Nuwan', degree: 'Applied Sciences' },
      { id: 3, name: 'Sajeewa', degree: 'Applied Sciences' },
      { id: 4, name: 'Dureksha', degree: 'SE' }
    ]
  });

  const switchNameHadler = () => {
    this.setState({
      persons: [
        { id: 1, name: 'Cat', age: 10 },
        { id: 2, name: 'Shehanka', age: 70 },
        { id: 3, name: 'Perera', age: 50 }
      ]
    });
  };

  return (
    <div>
      {studentsState.students.map(e => (
        <Student key={e.id} name={e.name} degree={e.degree} />
      ))}
    </div>
  );
};

export default StudentsList;
