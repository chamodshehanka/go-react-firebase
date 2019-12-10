import React from 'react';
import './App.css';
import Landing from './components/Landing';
import 'bootstrap/dist/css/bootstrap.css';
import StudentsList from './components/StudentsList';

function App() {
  return (
    <div className='App'>
      <Landing />
      <div className='container'>
        <StudentsList />
      </div>
    </div>
  );
}

export default App;
