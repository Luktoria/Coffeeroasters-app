export default function OrderOption({title, info, onOrderClick }){
  function handleClick(){
    onOrderClick(title)
  }

  return(
    <div className='inactive' onClick={handleClick}>
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
  );
}


  