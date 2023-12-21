import React from 'react';
import { Link } from 'react-router-dom';



const Steps = () => {
  return (
    <section>
      <div className="steps-outer">
        <h4>How it works</h4>
        <div className="rental-manager-progress-bar-container">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="steps-description">

          <div>
          <h2>01</h2>
          <h3>Pick your coffee</h3>
          <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
          </div>

           <div>
          <h2>02</h2>
           <h3>Choose the frequency</h3>
           <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
          </div>

           <div>
          <h2>03</h2>
           <h3>Receive and enjoy!</h3>
           <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
          </div>

        </div>


        {/* Button to navigate to the Contact page */}
        <Link to="/createplan">
          <button className="primary-button">Create your plan</button>
        </Link>

      </div>
    </section>

  );
};

export default Steps;