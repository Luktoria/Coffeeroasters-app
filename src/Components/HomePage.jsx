import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>CoffeeRoasters Home Page</h2>
      <p>Welcome to the home page!</p>
      <ul>
      <li>Test item 1</li> 
      </ul>
       {/* Button to navigate to the Contact page */}
      <Link to="/createplan">
        <button>Create Subscription</button>
      </Link>
    </div>
  );
};

export default HomePage;