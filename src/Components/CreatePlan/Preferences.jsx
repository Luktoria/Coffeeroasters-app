import { useState } from 'react';

import OrderOption from './OrderOption';
import OrderQuestion from './OrderQuestion';
import OrderSummary from './OrderSummary';
import { PREFERENCES } from '../../data';
import { BEANTYPE } from '../../data';
import { AMOUNTS } from '../../data';
import { GRINDTYPES } from '../../data';
import { DELIVERYTIMES } from '../../data';


export default function Preferences(){
    //States for showing or hiding the three options
  const [showCoffee, setShowCoffee] = useState(false);
  const [showBean, setShowBean] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [showGrind, setShowGrind] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);

  //States for setting the coffee types
  const [coffee, setCoffee] = useState("_____");
  const [bean, setBean] = useState("_____");
  const [amount, setAmount] = useState("_____");
  const [grind, setGrind] = useState("_____");
  const [delivery, setDelivery] = useState("_____");

  // ------- Click on questions to show/hide element --------------------------
  function handleCoffee() {
    setShowCoffee(!showCoffee);
  }

  function handleBean() {
    setShowBean(!showBean);
  }

  function handleAmount() {
    setShowAmount(!showAmount);
  }

  function handleGrind() {
    setShowGrind(!showGrind); 
  }

  function handleDelivery() {
    setShowDelivery(!showDelivery)
  }

// ------- Select types functions--------------------------

  function selectType(clickedItem) {
    //capsule, filter, espresso
    setCoffee(clickedItem);
  }

  function selectBean(clickedItem) {
    //single origin, decaf, blended
    setBean(clickedItem);
  }

  function selectAmount(clickedItem) {
    //250g, 500g, 1000g
    setAmount(clickedItem);
  }

  function selectGrind(clickedItem) {
    // wholebean, filter, cafetiére
    setGrind(clickedItem);
  }

  function selectDelivery(clickedItem) {
    // weekly, 2weekly, monthly
    setDelivery(clickedItem)
  }

  return (
        <>
          <div className="preferences">


        <div className="options">
          <OrderQuestion order="How do you drink your coffee?"
            showOptions={handleCoffee}
            showArrow={showCoffee} />
          {showCoffee ?
            <>
              {PREFERENCES.map((preference) => {
                return (<OrderOption key={preference.id} {...preference} onOrderClick={selectType} />)
              })}
            </> : ''}
        </div>



        <div className="options">
          <OrderQuestion order="What type of coffee?"
            showOptions={handleBean}
            showArrow={showBean} />
          {showBean ?
            <>
              {BEANTYPE.map((preference) => {
                return (<OrderOption key={preference.id} {...preference} onOrderClick={selectBean} />)
              })}
            </> : ''}
        </div>



        <div className="options">
          <OrderQuestion order="How much would you like?"
            showOptions={handleAmount}
            showArrow={showAmount}
          />
          {showAmount ?
            <>
              {AMOUNTS.map((preference) => {
                return (<OrderOption key={preference.id} {...preference} onOrderClick={selectAmount} />)
              })}
            </> : ''}
        </div>


        <div className="options">
          <OrderQuestion order="Want us to grind them?"
            showOptions={handleGrind}
            showArrow={showGrind}
          />

          {showGrind ?

            <>{GRINDTYPES.map((preference) => {
              return (<OrderOption key={preference.id} {...preference} onOrderClick={selectGrind} />)
            })} </>
            : ''}

        </div>


        <div className="options">
          <OrderQuestion order="How often should we deliver?"
            showOptions={handleDelivery}
            showArrow={showDelivery} />

          {showDelivery ?
            <>
              {DELIVERYTIMES.map((preference) => {
                return (<OrderOption key={preference.id} {...preference} onOrderClick={selectDelivery} />)
              })}
            </> : ''}
        </div>

      </div>

      
       <OrderSummary coffee={coffee}
        type={bean}
        amount={amount}
        grind={grind}
        delivery={delivery}
      />
      </>

  )

}