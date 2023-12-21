import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <nav>
      <img src="./shared/desktop/logo.svg" alt="Coffeeroasters logo" />
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
           <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/createplan">Create plan</Link>
          </li>
        </ul>

      </nav>
  );
};

export default Navbar;