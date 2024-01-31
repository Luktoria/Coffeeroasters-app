export default function OrderSummary({ coffee, type, amount, grind, delivery}){
  return (
     <>
     
        <p>"I drink my coffee
          <span> {coffee}</span>, with a
          <span> {type}</span> type of bean.
          <span> {amount}</span>
         
          <span className="summary-grind"> ground ala </span>
          <span>{grind}</span>
      
          , sent to me
          <span> {delivery}</span>."</p>
      </>
  )

}