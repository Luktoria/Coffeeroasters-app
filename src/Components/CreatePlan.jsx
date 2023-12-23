import React, { useState } from 'react';
import CreateSteps from './CreateSteps';


const CreatePlan = () => {
  const options = [
    
    {
      id: 0,
      title: "Capsule",
      info: "Compatible with Nespresso systems and similar brewers"
    },

    {
      id: 1,
      title: "Filter",
      info: "For pour over or drip methods like Aeropress, Chemex, and V60"
    },

    {
      id: 2,
      title: "Espresso",
      info: "Dense and finely ground beans for an intense, flavorful experience"
    },

    {
      id: 3, 
      title: "Single Origin",
      info: "Distinct, high quality coffee from a specific family-owned farm"
    },
    {
      id: 4,
      title: "Decaf",
      info: "Just like regular coffee, except the caffeine has been removed"
    }
  ]


  const [capsule, setCapsule] = useState(false);
  const [filter, setFilter] = useState(false);
  const [espresso, setEspresso] = useState(false);
  const [chosenMethod, setChosenMethod] = useState("");

  const chooseCapsule = () => {
    setCapsule(true);
    setChosenMethod('using Capsules');
    setFilter(false);
    setEspresso(false);
  }

  const chooseFilter = () => {
    setCapsule(false);
    setFilter(true);
    setChosenMethod('as Filter');
    setEspresso(false);
  }

  const chooseEspresso = () => {
    setCapsule(false);
    setFilter(false);
    setChosenMethod('as Espresso');
    setEspresso(true);
  }


  return (
    <section>
      <div className="create-intro">
        <h1>Create plan</h1>
        <p>Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.</p>
      </div>

      <CreateSteps />

      <div className="options">

        <div className="question-one">
          <h2>How do you drink your coffee?</h2>
        </div>

        <div onClick={chooseCapsule} className={`preference1 ${capsule ? 'testColor' : 'none'}`}>
          <h2>Capsule</h2>
        </div>

        <div onClick={chooseFilter} className={filter ? 'testColor' : 'none'}>
          <h2>Filter</h2>
        </div>

        <div onClick={chooseEspresso} className={espresso ? 'testColor' : 'none'}>
          <h2>Espresso</h2>
        </div>


        <div className="question-two">
          <h2>What kind of coffee?</h2>
        </div>

    
       <div>    
       {options.map((option, index) => (
        <div key={index}>
            <h2>{option.title}</h2>
      <p>{option.info}</p>
       </div>))}
  
      </div>
      </div>



      <div>
        <h3>Order summary</h3>
        <p> {chosenMethod} </p>
      </div>


    </section >
  );
};

export default CreatePlan;