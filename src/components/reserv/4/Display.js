import './Display.css'

const Display = ({input, previouse}) => { 
  
  
  
  return(
    <div className = "display">
      <div className = "upper operand"> 
      {previouse}
      </div>      
      <div className = "lower operand">
      {input}      
      </div>    
    </div>
    
  );
}

export default Display