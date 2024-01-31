import OrderOption from './OrderOption';
import OrderQuestion from './OrderQuestion';
import { PREFERENCES } from '../../data';
import { BEANTYPE } from '../../data';
import { AMOUNTS } from '../../data';
import { GRINDTYPES } from '../../data';
import { DELIVERYTIMES } from '../../data';


export default function Preferences({ showItems, onShow, onChoose }) {

  return (
    <>
      <div className="preferences">


        <div className="options">
          <OrderQuestion order="How do you drink your coffee?"
            showOptions={() => onShow('showCoffee', !showItems.showCoffee)}
            showArrow={showItems.showCoffee} />

          {showItems.showCoffee ?
            <>
              {PREFERENCES.map((preference) => {
                return (<OrderOption key={preference.id} {...preference} onOrderClick={(title) => onChoose(title, 'coffee')} />)
              })}
            </> : ''}
        </div>



        <div className="options">
          <OrderQuestion order="What type of coffee?"
            showOptions={() => onShow('showBean', !showItems.showBean)}
            showArrow={showItems.showBean} />
          {showItems.showBean ?
            <>
              {BEANTYPE.map((preference) => {
                return (<OrderOption key={preference.id} {...preference} onOrderClick={(title) => onChoose(title, 'bean')} />)
              })}
            </> : ''}
        </div>


        <div className="options">
          <OrderQuestion order="How much would you like?"
            showOptions={() => onShow('showAmount', !showItems.showAmount)}
            showArrow={showItems.showAmount}
          />
          {showItems.showAmount ?
            <>
              {AMOUNTS.map((preference) => {
                return (<OrderOption key={preference.id} {...preference} onOrderClick={(title) => onChoose(title, 'amount')} />)
              })}
            </> : ''}
        </div>


        <div className="options">
          <OrderQuestion order="Want us to grind them?"
            showOptions={() => onShow('showGrind', !showItems.showGrind)}
            showArrow={showItems.showGrind}
          />

          {showItems.showGrind ?

            <>{GRINDTYPES.map((preference) => {
              return (<OrderOption key={preference.id} {...preference} onOrderClick={(title) => onChoose(title, 'grind')} />)
            })} </>
            : ''}

        </div>


        <div className="options">
          <OrderQuestion order="How often should we deliver?"
            showOptions={() => onShow('showDelivery', !showItems.showDelivery)}
            showArrow={showItems.showDelivery} />

          {showItems.showDelivery ?
            <>
              {DELIVERYTIMES.map((preference) => {
                return (<OrderOption key={preference.id} {...preference} onOrderClick={(title) => onChoose(title, 'delivery')} />)
              })}
            </> : ''}
        </div>

      </div>
    </>
  )
}