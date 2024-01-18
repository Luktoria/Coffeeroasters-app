import React from 'react';
import { Link } from 'react-router-dom';
import logo from './imgs/shared/desktop/logo.svg';

const Navbar = () => {
  return (
     <nav>
      <img src={logo} alt="Coffeeroasters logo" />
        <ul>
          <li>
            <Link to="/Coffeeroasters-app/">HomePage</Link>
          </li>
          <li>
           <Link to="/Coffeeroasters-app/aboutus">About Us</Link>
          </li>
          <li>
           <Link to="/Coffeeroasters-app/createplan">Create plan</Link>
          </li>
        </ul>

      </nav>
  );
};

export default Navbar;