import React from 'react';
import { Link } from 'react-router-dom';

import Collection from './HomePageCoffies';
import Benefits from './HomeBenefits';
import Steps from "./HomeSteps";

const HomePage = () => {
  return (
    <section>
      <div className="home-intro">
        <div className="intro-text">
          <h1>Great Coffee made simple.</h1>
          <p>Start your morning with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
          {/* Button to navigate to the Contact page */}
          <Link to="/Coffeeroasters-app/createplan">
            <button className="primary-button">Create your plan</button>
          </Link>
        </div>
      </div>
      <Collection />
      <Benefits />
      <Steps />
    
    </section>

  );
};

export default HomePage;