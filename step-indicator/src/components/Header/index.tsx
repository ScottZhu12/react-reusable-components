import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/sign-up/step/1'>Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
