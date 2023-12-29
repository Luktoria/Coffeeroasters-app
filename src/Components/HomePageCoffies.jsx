import React from 'react';

const Collection = () => {
  return (
    <section>
      <div className="collection-outer">
      
        <p className="alternate-title">our collection</p>
    
      

      <div className="collection-coffees">
        <div className="collection-item">
          <img src="./assets/home/desktop/image-gran-espresso.png" alt="coffee gran espresso" />
          <div>
          <h4>Gran Espresso</h4>
          <p>Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
          </div>
        </div>

        <div className="collection-item">
        <img src="./assets/home/desktop/image-planalto.png" alt="coffee planalto" />
        <div>
        <h4>Planalto</h4>
        <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</p>
        </div>
        </div>

        <div className="collection-item">
        <img src="./assets/home/desktop/image-piccollo.png" alt="coffee piccollo" />
        <div>
        <h4>Piccollo</h4>
        <p>Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
        </div>
        </div>

        <div className="collection-item">
        <img src="./assets/home/desktop/image-danche.png" alt="coffee danche" />
        <div>
        <h4>Danche</h4>
        <p>Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
        </div>
        </div>

      </div>

      </div>

    </section>

  );
};

export default Collection;