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
    setStudentsState({
      students: [
        { id: 1, name: 'Dureksha', degree: 'SE' },
        { id: 2, name: 'Kaveesha', degree: 'SE' },
        { id: 3, name: 'Suranga', degree: 'DS' }
      ]
    });
  };

  return (
    <div>
      {studentsState.students.map(e => (
        <div key={e.id}>
          <Student key={e.id} name={e.name} degree={e.degree} />
          <button className='btn btn-success' onClick={switchNameHadler}>
            Change Name
          </button>
        </div>
      ))}
    </div>
  );
};

export default StudentsList;
