import arrowImg from '../../imgs/assets/plan/desktop/icon-arrow.svg';

export default function OrderQuestion({order, showOptions, showArrow}){
  return(
    <div className='question-one'
    
     onClick={showOptions}
     
     >
    <h2>{order} 
    { showArrow ? 
      <span><img src={arrowImg} alt="arrow-up" className="up-arrow" /></span> 
      :
      <span><img src={arrowImg} alt="arrow-down" /></span>
    }
    
    </h2>
    </div>
  )
}