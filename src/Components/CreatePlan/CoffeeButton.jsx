export default function CoffeeButton({ index, name, isSelected }){
  return(
    <div className={isSelected ? 'preference-active' : ''}>
    <button><span>{index}</span>{name}</button>
    { index !== "05" ? <hr /> : ' '}
    </div>

  );
}