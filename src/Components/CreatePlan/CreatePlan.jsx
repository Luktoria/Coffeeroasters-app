import { useState } from 'react';
import CreateSteps from '../CreateSteps';
import CreateBanner from './CreateBanner';
import CoffeeButton from './CoffeeButton';
import Preferences from './Preferences';
import OrderSummary from './OrderSummary';
import Dialog from '../Dialog';



export default function CreatePlan() {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [summmaryOpen, setSummaryOpen] = useState(false);

  //States for showing or hiding the three options
  const [showItems, setShowItems] = useState({
    showCoffee: false,
    showBean: false,
    showAmount: false,
    showGrind: false,
    showDelivery: false
  });

  //States for setting the coffee types

  const [chooseType, setChooseType] = useState({
    coffee: "_____",
    bean: "_____",
    amount: "_____",
    grind: "_____",
    delivery: "_____"
  });

  // ------- Click on questions to show/hide element --------------------------

  function handleChange(identifier, newValue) {
    setShowItems(prevShowItems => {
      return {
        ...prevShowItems,
        [identifier]: newValue
      };
    });
  }

  // ------- Select types function--------------------------

  function handleType(newValue, identifier) {
    setChooseType(prevChooseType => {
      return {
        ...prevChooseType,
        [identifier]: newValue
      }
    })
  };

  function showSummary() {
    setSummaryOpen(true);
  };

  function showDialog(){
    setDialogOpen(true);
    setSummaryOpen(false);
  }


  function closeDialog() {
    setDialogOpen(false);
  }


  return (
    <>
      <CreateBanner />
      <CreateSteps />

      <div className="preference-steps">
        <CoffeeButton index="01" name="Preferences" isSelected={showItems.showCoffee} />
        <CoffeeButton index="02" name="Bean Type" isSelected={showItems.showBean} />
        <CoffeeButton index="03" name="Quantity" isSelected={showItems.showAmount} />
        <CoffeeButton index="04" name="Grind Option" isSelected={showItems.showGrind} />
        <CoffeeButton index="05" name="Deliveries" isSelected={showItems.showDelivery} />
      </div>

      <Preferences
        showItems={showItems}
        onShow={handleChange}
        chooseType={chooseType}
        onChoose={handleType}
      />

      <div className="summary">
        <h3>Order summary</h3>
        <OrderSummary coffee={chooseType.coffee}
          type={chooseType.bean}
          amount={chooseType.amount}
          grind={chooseType.grind}
          delivery={chooseType.delivery}
        />
      </div>


      <Dialog
        isOpen={summmaryOpen}
        closeWindow={closeDialog}
      >
        <div className="dialog-heading">
          <h2>Order Summary</h2>
        </div>

         <div className="dialog-summary">
         <h4>"I drink my coffee
          <span> {chooseType.coffee}</span>, with a
          <span> {chooseType.bean}</span> type of bean.
          <span> {chooseType.amount}</span>
     
          <span  className="dialog-summary-grind"> ground ala </span>
          <span>{chooseType.grind}</span>
      
          , sent to me
          <span> {chooseType.delivery}</span>."</h4>
        </div>

        <div className="dialog-safety-check">
        <p>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
        </div>
       
        <button className='primary-button' onClick={showDialog}>Checkout</button>
      </Dialog>
        
      <Dialog
      isOpen={dialogOpen}
        closeWindow={closeDialog}>
        <div className="common-dialog">
      <h2>Dear visitor!</h2>
      <p>Since this is only a fictional coffee website, the social media icons and the checkout button is only for the sake of design. Thank you for trying them out anyway!</p>
      </div>
      
      </Dialog>

      <button className='primary-button' onClick={showSummary}>Create my plan!</button>


    </>
  )

}
