import { useState } from 'react';
import CreateSteps from '../CreateSteps';
import CreateBanner from './CreateBanner';
import CoffeeButton from './CoffeeButton';
import Preferences from './Preferences';


// import Dialog from './Dialog';


export default function CreatePlan() {
  const [selectedOption, setSelectedOption] = useState(false);


  function handleButtons() {
    setSelectedOption(!selectedOption);
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
      
      <Preferences />

     
    </>
  )

}
