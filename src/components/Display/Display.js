import './Display.css'

const Display = ({currentDisplay, previousDisplay}) => {   
  
  return(
    <div className = "display">
      <div className = "upper operand"> 
      {previousDisplay}
      </div>      
      <div className = "lower operand">
      {currentDisplay}      
      </div>    
    </div>
    
  );
}

export default Display