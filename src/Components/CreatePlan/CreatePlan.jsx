import { useState } from 'react';
import CreateSteps from '../CreateSteps';
import CreateBanner from './CreateBanner';
import CoffeeButton from './CoffeeButton';
import OrderOption from './OrderOption';
import OrderQuestion from './OrderQuestion';
import OrderSummary from './OrderSummary';
import { PREFERENCES } from '../../data';
import { BEANTYPE } from '../../data';
import { AMOUNTS } from '../../data';
import { GRINDTYPES } from '../../data';
import { DELIVERYTIMES } from '../../data';

// import Dialog from './Dialog';


export default function CreatePlan() {
  const [selectedOption, setSelectedOption] = useState(false);
  const [selectCoffee, setSelectCoffee] = useState("_____");
  const [selectType, setSelectedType] = useState("_____");
  const [selectAmount, setSelectedAmount] = useState("_____");
  const [selectGrind, setSelectedGrind] = useState("_____");
  const [selectDelivery, setSelectedDelivery] = useState("_____");

  function handleButtons() {
    setSelectedOption(!selectedOption);
  }

  function handleOrderClick(clickedItem) {
    setSelectCoffee(clickedItem);
  }

  function handleType(clickedItem) {
    setSelectedType(clickedItem);
  }

  function handleAmount(clickedItem){
    setSelectedAmount(clickedItem);
  }

  function handleGrind(clickedItem){
    setSelectedGrind(clickedItem);
  }

  function handleDelivery(clickedItem){
    setSelectedDelivery(clickedItem)
  }


  return (
    <>
      <CreateBanner />
      <CreateSteps />

      <div className="preference-steps">
        <CoffeeButton index="01" name="Preferences" isSelected={selectedOption} />
        <CoffeeButton index="02" name="Bean Type" isSelected={selectedOption} />
        <CoffeeButton index="03" name="Quantity" isSelected={selectedOption} />
        <CoffeeButton index="04" name="Grind Option" isSelected={selectedOption} />
        <CoffeeButton index="05" name="Deliveries" isSelected={selectedOption} />

        <button onClick={handleButtons}>CLICK ME</button>
      </div>

      <div className="preferences">


        <div className="options">
          <OrderQuestion order="How do you drink your coffee?" />
          {PREFERENCES.map((preference) => {
            return (<OrderOption key={preference.id} {...preference} onOrderClick={handleOrderClick} />)
          })}
        </div>



        <div className="options">
          <OrderQuestion order="What type of coffee?" />
          {BEANTYPE.map((preference) => {
            return (<OrderOption key={preference.id} {...preference} onOrderClick={handleType} />)
          })}
        </div>



        <div className="options">
          <OrderQuestion order="How much would you like?" />
          {AMOUNTS.map((preference) => {
             return (<OrderOption key={preference.id} {...preference} onOrderClick={handleAmount} />)
          })}
        </div>


        <div className="options">
        <OrderQuestion order="Want us to grind them?" />
        {GRINDTYPES.map((preference) => {
            return (<OrderOption key={preference.id} {...preference} onOrderClick={handleGrind} />)
        })}
        </div>


        <div className="options">
        <OrderQuestion order="How often should we deliver?" />
        {DELIVERYTIMES.map((preference) => {
           return (<OrderOption key={preference.id} {...preference} onOrderClick={handleDelivery} />)
        })}
        </div>

      </div>

      <OrderSummary 
      coffee={selectCoffee} 
      type={selectType} 
      amount={selectAmount} 
      grind={selectGrind} 
      delivery={selectDelivery} 
      />



    </>
  )

}
