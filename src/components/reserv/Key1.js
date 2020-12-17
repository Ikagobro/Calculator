import './Keys.css'

function calc({event}) {
 
    return(
      <div className="keys-grid">
        <button onClick={event} className= "button ac" id ="span-two">AC</button>
        <button onClick={event} className= "button del">DEL</button>
        <button onClick={event} className= "button operation">÷</button>
        <button onClick={event} className= "button number">7</button>
        <button onClick={event} className= "button number">8</button>
        <button onClick={event} className= "button number">9</button>
        <button onClick={event} className= "button operation">*</button>
        <button onClick={event} className= "button number">4</button>
        <button onClick={event} className= "button number">5</button>
        <button onClick={event} className= "button number">6</button>
        <button onClick={event} className= "button operation">-</button>
        <button onClick={event} className= "button number">1</button>
        <button onClick={event} className= "button number">2</button>
        <button onClick={event} className= "button number">3</button>
        <button onClick={event} className= "button operation">+</button>
        <button onClick={event} className= "button number">0</button>
        <button onClick={event} className= "button number">.</button>
        <button onClick={event} className= "button equal" id ="span-two">=</button>           
      </div>        
    );    
  }
  
  export default calc;