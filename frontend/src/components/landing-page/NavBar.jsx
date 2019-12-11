import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='!#'>
          Go + React + Firebase <span role='img' aria-label='fire'>🔥</span>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
