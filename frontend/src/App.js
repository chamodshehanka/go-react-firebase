import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LandingPage from './components/landing-page/landing-page';
import Radium from 'radium';

function App() {
  return (
    <div className='App'>
      <LandingPage />
    </div>
  );
}

export default Radium(App);
