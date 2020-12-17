import './Keys.css'

function calc({numberButtons, 
               operationButtons,
               equalButton,
               delButton,
               clearButton}) {
  
    function number(e) {
      numberButtons(e.target.textContent);
    }

    function operation(e) {
      operationButtons(e.target.textContent);
    }

    function equal() {
      equalButton();
    }

    function del() {
      delButton();
    }

    function clear() {      
      clearButton()
    }

    return(
      <div className="keys-grid">
        <button onClick={clear} className= "button ac" id ="span-two">AC</button>
        <button onClick={del} className= "button del">←</button>
        <button onClick={operation} className= "button operation">/</button>
        <button onClick={number} className= "button number">7</button>
        <button onClick={number} className= "button number">8</button>
        <button onClick={number} className= "button number">9</button>
        <button onClick={operation} className= "button operation">*</button>
        <button onClick={number} className= "button number">4</button>
        <button onClick={number} className= "button number">5</button>
        <button onClick={number} className= "button number">6</button>
        <button onClick={operation} className= "button operation">-</button>
        <button onClick={number} className= "button number">1</button>
        <button onClick={number} className= "button number">2</button>
        <button onClick={number} className= "button number">3</button>
        <button onClick={operation} className= "button operation">+</button>
        <button onClick={number} className= "button number">0</button>
        <button onClick={number} className= "button number">.</button>
        <button onClick={equal} className= "button equal" id ="span-two">=</button>           
      </div>        
    );    
  }
  
  export default calc;