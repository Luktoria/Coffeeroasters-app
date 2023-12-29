import React from 'react';

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="benefits benefits-background">
        <h2>Why choose us?</h2>
        <p>A large part of our role is choosing which particular coffees will be featured
          in our range. This means working closely with the best coffee growers to give
          you a more impactful experience on every level.</p>
      </div>

      <div className="benefits-reasons">
        <div className="benefits-item">
          <img src="./assets/home/desktop/icon-coffee-bean.svg" alt="Coffee bean icon" />
          <div>
          <h4>Best quality</h4>
          <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
          </div>
        </div>

        <div className="benefits-item">
          <img src="./assets/home/desktop/icon-gift.svg" alt="Gift icon" />
          <div>
          <h4>Exclusive benefits</h4>
          <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
          </div>
        </div>

        <div className="benefits-item">
          <img src="./assets/home/desktop/icon-truck.svg" alt="Truck icon" id="truck-icon"/>
          <div>
          <h4>Free shipping</h4>
          <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p> 
          </div>
          </div>
      </div>

    </section>

  );
};

export default Benefits;