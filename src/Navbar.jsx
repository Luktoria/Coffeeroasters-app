import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
     <nav>
      <img src="../public/shared/desktop/logo.svg" alt="" />
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