import React, { useState } from 'react';
import CreateSteps from './CreateSteps';



const CreatePlan = () => {
  const preferences = [
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
    }
  ];

  const beanType = [
    {
      id: 3,
      title: "Single Origin",
      info: "Distinct, high quality coffee from a specific family-owned farm"
    },
    {
      id: 4,
      title: "Decaf",
      info: "Just like regular coffee, except the caffeine has been removed"
    },
    {
      id: 5,
      title: "Blended",
      info: "Combination of two or three dark roasted beans of organic coffees"
    }
  ];

  const amounts = [
    {
      id: 6,
      title: "250g",
      info: "Perfect for the solo drinker. Yields about 12 delicious cups.",
    },
    {
      id: 7,
      title: "500g",
      info: "Perfect option for a couple. Yields about 40 delectable cups."
    },
    {
      id: 8,
      title: "1000g",
      info: "Perfect for offices and events. Yields about 90 delightful cups."
    }
  ];

  const grindtypes = [
    {
      id: 9,
      title: "Wholebean",
      info: "Best choice if you cherish the full sensory experience."
    },
    {
      id: 10,
      title: "Filter",
      info: "For drip or pour-over coffee methods such as V60 or Aeropress."
    },
    {
      id: 11,
      title: "Cafetiére",
      info: "Course ground beans specially suited for french press coffee."
    }
  ];

  const deliveryTimes = [
    {
      id: 12,
      title: "Every week",
      info: "$7.20 per shipment. Includes free first-class shipping."
    },
    {
      id: 13,
      title: "Every 2 weeks",
      info: "$9.60 per shipment. Includes free priority shipping."
    },
    {
      id: 14,
      title: "Every month",
      info: "$12.00 per shipment. Includes free priority shipping."
    }
  ]





  const [chosenMethod, setChosenMethod] = useState("_____");
  let [activeStyle, setActiveStyle] = useState("");
  const [chosenType, setChosenType] = useState("_____");
  let [activeBeanStyle, setActiveBeanStyle] = useState("");
  const [chosenAmount, setChosenAmount] = useState("_____");
  let [activeAmountStyle, setActiveAmountStyle] = useState("");
  const [chosenGrind, setChosenGrind] = useState("_____");
  let [activeGrindStyle, setActiveGrindStlye] = useState("");
  const [chosenDelivery, setChosenDelivery] = useState("_____");
  let [activeDeliveryStyle, setActiveDeliveryStyle] = useState("");
  const [methodOpened, setMethodOpened] = useState(false);
  const [typeOpened, setTypeOpened] = useState(false);
  const [amountOpened, setAmountOpened] = useState(false);
  const [grindOpened, setGrindOpened] = useState(false);
  const [deliveryOpened, setDeliveryOpened] = useState(false);


  const toggleMethod = () => {
    setMethodOpened(methodOpened => !methodOpened);
  };

  const toggleType = () => {
    setTypeOpened(typeOpened => !typeOpened);
  };

  const toggleAmount = () => {
    setAmountOpened(amountOpened => !amountOpened);
  };

  const toggleGrind = () => {
    setGrindOpened(grindOpened => !grindOpened);
  };

  const toggleDelivery = () => {
    setDeliveryOpened(deliveryOpened => !deliveryOpened);
  };

  const chooseMethod = (index) => {
    if (preferences[index].title === 'Capsule') {
      setChosenMethod('using Capsules');
      setActiveStyle('Capsule');
    }
    else if (preferences[index].title === 'Filter') {
      setChosenMethod('as Filter');
      setActiveStyle('Filter');
    }
    else if (preferences[index].title === 'Espresso') {
      setChosenMethod('as Espresso');
      setActiveStyle('Espresso');
    }
  };

  const chooseType = (index) => {
    if (beanType[index].title === 'Single Origin') {
      setChosenType('Single Origin');
      setActiveBeanStyle('Single Origin');
    }
    else if (beanType[index].title === 'Decaf') {
      setChosenType('Decaf');
      setActiveBeanStyle('Decaf');
    }

    else if (beanType[index].title === 'Blended') {
      setChosenType('Blended');
      setActiveBeanStyle('Blended');
    }
  };

  const chooseAmount = (index) => {
    if (amounts[index].title === "250g") {
      setChosenAmount("250g");
      setActiveAmountStyle("250g");
    }
    else if (amounts[index].title === "500g") {
      setChosenAmount("500g");
      setActiveAmountStyle("500g");
    }

    else if (amounts[index].title === "1000g") {
      setChosenAmount("1000g");
      setActiveAmountStyle("1000g");
    }
  };

  const chooseGrind = (index) => {
    if (grindtypes[index].title === "Wholebean") {
      setChosenGrind("WholeBean");
      setActiveGrindStlye("Wholebean");
    }
    else if (grindtypes[index].title === "Filter") {
      setChosenGrind("Filter");
      setActiveGrindStlye("Filter");
    }
    else if (grindtypes[index].title === "Cafetiére") {
      setChosenGrind("Cafetiére");
      setActiveGrindStlye("Cafetiére");
    }
  };

  const chooseDelivery = (index) => {
    if (deliveryTimes[index].title === "Every week") {
      setChosenDelivery("Every week");
      setActiveDeliveryStyle("Every week");
    }
    else if (deliveryTimes[index].title === "Every 2 weeks") {
      setChosenDelivery("Every two weeks");
      setActiveDeliveryStyle("Every 2 weeks");
    }
    else if (deliveryTimes[index].title === "Every month") {
      setChosenDelivery("Every month");
      setActiveDeliveryStyle("Every month");
    }
  }


  return (
    <section>
      <div className="create-intro">
        <h1>Create plan</h1>
        <p>Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.</p>
      </div>

      <CreateSteps />


      <div className="preference-steps">

        <div className="preference-option">
          <button><span className="first-span">01</span>Preferences</button>
        </div>
        <hr />

        <div className="bean-types">
          <button><span>02</span>Bean Type</button>
        </div>
        <hr />

        <div className="quantity">
          <button><span>03</span>Quantity</button>
        </div>
        <hr />

        <div className="grind">
          <button disabled={activeStyle === "Capsule"} ><span>04</span>Grind Option</button>
        </div>
        <hr />

        <div className="deliveries">
          <button><span>05</span>Deliveries</button>
        </div>

      </div>

      <div className="preferences">

        <div className="options">

          <div className="question-one" onClick={toggleMethod}>
            <h2>How do you drink your coffee?
              {methodOpened ?
                <span><img src="assets/plan/desktop/icon-arrow.svg" alt="arrow-down" /></span> :
                <span><img src="assets/plan/desktop/icon-arrow.svg" alt="arrow-up" className="up-arrow" /></span>
              }
            </h2>
          </div>

          {methodOpened ?
            <>
              {preferences.map((option, index) => (

                <div key={option.id} onClick={e => chooseMethod(index)} className={option.title === activeStyle ? 'activeColor' : 'inactive'}>
                  <h4>{option.title}</h4>
                  <p>{option.info}</p>
                </div>

              ))}
            </> :
            ""
          }
        </div>



        <div className="types">
          <div className="question-two" onClick={toggleType}>
            <h2>What type of coffee?
                {typeOpened ? 
                <span><img src="assets/plan/desktop/icon-arrow.svg" alt="arrow-down" /></span> :
                <span><img src="assets/plan/desktop/icon-arrow.svg" alt="arrow-up" className="up-arrow" /></span>
                }
              </h2>
          </div>
          {typeOpened ? 
          <>
          {beanType.map((type, index) => (
            <div key={type.id} onClick={e => chooseType(index)} className={type.title === activeBeanStyle ? 'activeColor' : 'inactive'}>
              <h4>{type.title}</h4>
              <p>{type.info}</p>
            </div>
          ))}
          </> :
          ""
          }
        </div>

        <div className="amounts">
          <div className="question-three" onClick={toggleAmount}>          
            <h2>How much would you like?
            {amountOpened ? 
             <span><img src="assets/plan/desktop/icon-arrow.svg" alt="arrow-down" /></span> :
                <span><img src="assets/plan/desktop/icon-arrow.svg" alt="arrow-up" className="up-arrow" /></span>}
            </h2>
          </div>

           {amountOpened ?
          <>
          {amounts.map((amount, index) => (
            <div key={amount.id} onClick={e => chooseAmount(index)} className={amount.title === activeAmountStyle ? 'activeColor' : 'inactive'}>
              <h4>{amount.title}</h4>
              <p>{amount.info}</p>
            </div>
          ))}
          </> :
          ""
          }
        </div>

        <div className="grindtypes">
          <div className="question-four" onClick={toggleGrind}>
            <h2>Want us to grind them?
            {grindOpened ?
            <span><img src="assets/plan/desktop/icon-arrow.svg" alt="arrow-down" /></span> :
                <span><img src="assets/plan/desktop/icon-arrow.svg" alt="arrow-up" className="up-arrow" /></span>}
            </h2>
          </div>
          {grindOpened ? 
          
          <>
          {grindtypes.map((grind, index) => (
            <div key={grind.id} onClick={e => chooseGrind(index)} className={grind.title === activeGrindStyle ? 'activeColor' : 'inactive'}>
              <h4>{grind.title}</h4>
              <p>{grind.info}</p>
            </div>
          ))}
          </> :
          ""
          }
        </div>

        <div className="delivery-times">
          <div className="question-five" onClick={toggleDelivery}>
            <h2>How often should we deliver?
            {deliveryOpened? 
            <span><img src="assets/plan/desktop/icon-arrow.svg" alt="arrow-down" /></span> :
                <span><img src="assets/plan/desktop/icon-arrow.svg" alt="arrow-up" className="up-arrow" /></span>}
            </h2>
          </div>

          {deliveryOpened?
          <>
          {deliveryTimes.map((del, index) => (
            <div key={del.id} onClick={e => chooseDelivery(index)} className={del.title === activeDeliveryStyle ? 'activeColor' : 'inactive'}>
              <h4>{del.title}</h4>
              <p>{del.info}</p>
            </div>
          ))}
          </> :
          ""
          }
        </div>


      </div>


      <div className="summary">
        <h3>Order summary</h3>
        <p>"I drink my coffee as <span> {chosenMethod} </span>, with a <span>{chosenType}</span> type of bean. <span>{chosenAmount}</span> ground ala <span>{chosenGrind}</span>, sent to me <span>{chosenDelivery}</span>."</p>
      </div>

      <button className="order">Create my plan!</button>


    </section >
  );
};

export default CreatePlan;