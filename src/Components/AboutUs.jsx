import React from 'react';
import commitmentImg from '../imgs/assets/about/desktop/image-commitment.jpg';
import { HEADQUARTERS } from '../data.js';


const AboutUs = () => {
  return (
    <section>
      <div className="about-us-intro">
        <div>
          <h2>About Us</h2>
          <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
        </div>
      </div>

      <div className="commitment">
        <div>
          <img src={commitmentImg} alt="barista" />
        </div>
        <div className="commitment-text">
          <h2>Our commitment</h2>
          <p>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
        </div>
      </div>


      <div className="quality-outer">
        <div className="quality">
        <h2>Uncompromising quality</h2>
        <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>
        <div className="quality-img">
        
        </div>
        
      </div>


      <div className="headquarters-outer">
        <h4>Our headquarters</h4>
        <div className="headquarters">

        {HEADQUARTERS.map((country) => {
          return (
          <div key={country.country}>
          <img src={country.img} alt={"illustration of " + country.country}/>
          <h3>{country.country}</h3>
          <p>{country.address}</p>
          <p>{country.city}</p>
          <p>{country.postcode}</p>
          <p>{country.phone}</p>
          </div>
      )
      })}
        
        </div>
      </div>
    </section>
  );
};

export default AboutUs;