import React, {Component} from 'react';
import './App.css';
import Display from'./components/Display/Display'
import Keys from './components/Keys/Key'

class App extends Component {
  constructor (){
    super();
    this.state = {
      input: "0",
      operation: "",
      buffer: ""
    }
  }  
  
  event = (e) => {
    const value = e.target.textContent;
    const buttonType = e.target.className;    

    if (value === 'AC') {
      this.allClear();
      return;        
    }   
   
    if (buttonType === "button number") {
      this.appendNumber(value);
    } 
    
    if (buttonType === "button operation") {      
      this.choiseOperation(value);      
    }

    if (buttonType === "button equal") {
      switch (this.state.operation) {
        case '-':
              const result = parseInt(this.state.buffer) - parseInt(this.state.input);
              this.setState({input: String(result)});
              this.setState({operation: ""});
          break;

        default:
          return;  
      }          
    }
  }
  
  choiseOperation (e) {
    this.setState({buffer: this.state.input});    
    this.setState({operation: String(e)});
  }
  
  appendNumber (e) { 
    if (this.state.input === '0') {
      this.setState({input: String(e)});
    }else { 
        if (this.state.operation !== "") {
          this.setState({input: ""});

        }else {
          this.setState({input: (String(this.state.input) + String(e))});  
        }                    
    }         
  }

  allClear () {
    this.setState({input: "0"})
    return;
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Display input = {this.state.input} 
                   operation = {this.state.operation} 
                   className = "display" 
          />
          <Keys event = {this.event} />             
        </header>        
      </div>
    )     
  }
}

export default App;
