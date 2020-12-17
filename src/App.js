import React, {Component} from 'react';
import './App.css';
import Display from'./components/Display/Display'
import Keys from './components/Keys/Key'

class App extends Component {
  constructor (){
    super();
    this.state = {
      currentOperand: "0",
      previousOperand: "",
      currentDisplay: "0",
      previousDisplay: "",
      operation: undefined      
    }
  }
  //===================================================================================
  appendNumber(e) {
    if (this.state.currentOperand === "0" && e !== ".") {
      this.setState({currentOperand: e});   
      return      
    }

    if (e === "." && String(this.state.currentOperand).includes(".")) return; 
    if (this.state.currentOperand.length < 10) {
      this.setState({currentOperand: (String(this.state.currentOperand) + String(e))});
    }else {
      return;
    }       
  }

  chooseOperation(e) {    
    if (this.state.currentOperand === "") return;
    console.log("3 " + this.state.previousOperand)
    if (this.state.previousOperand !== "") {
      this.compute(e);
    }

    setTimeout (()=> {
      this.setState({operation: e})
      this.setState({previousOperand: this.state.currentOperand})
      this.setState({currentOperand: ""})
    }, 0);      
  }

  compute(e) {    
    let computation;
    const previousNumber = parseFloat(this.state.previousOperand);
    const currentNumber = parseFloat(this.state.currentOperand);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (this.state.operation) {
      case "+" : 
            computation = previousNumber + currentNumber
            break
      case "-" : 
            computation = previousNumber - currentNumber 
            break
      case "*" : 
            computation = previousNumber * currentNumber 
            break
      case "/" : 
            computation = previousNumber / currentNumber 
            break
      default: break
    }
    
    setTimeout (()=> {
      this.setState({currentOperand: computation});
      this.setState({operation: undefined});
      this.setState({previousOperand: ""});
    }, 0);
  }

  getDisplayNumber(e) {

  }
  
  updateDisplay() {
    setTimeout (()=> {
      this.setState({currentDisplay: this.state.currentOperand});      
      if (this.state.operation !== undefined) {
           this.setState({previousDisplay: 
          `${this.state.previousOperand + this.state.operation}`});
      }else {
           this.setState({previousDisplay: ""});
      }
    }, 0);
      
  }

  clear() {
    this.setState({currentOperand: "0"});
    this.setState({previousOperand: ""});
    this.setState({operation: undefined});
  }

  delete() {
    if ((this.state.currentOperand).length > 1) {
      this.setState({currentOperand: (this.state.currentOperand).slice(0, -1) });
    } else {
      this.setState({currentOperand: "0"}); 
    }
  }
  //===================================================================================
  numberButtons = (e) => {     
    this.appendNumber(e); 
    this.updateDisplay();          
  } 

  operationButtons = (e) => { 
    this.chooseOperation(e); 
    this.updateDisplay();                   
  }

  equalButton = (e) => {
    this.compute()
    this.updateDisplay();  
  } 

  delButton = (e) => {
    this.delete();
    this.updateDisplay();           
  }

  clearButton = (e) => {
    this.clear();
    this.updateDisplay()
  }  
  //===================================================================================
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Display className = "display" 
                currentDisplay = {this.state.currentDisplay}
                previousDisplay = {this.state.previousDisplay}
          />
          <Keys numberButtons = {this.numberButtons}
                operationButtons = {this.operationButtons}
                equalButton = {this.equalButton}
                delButton = {this.delButton}
                clearButton = {this.clearButton}
          />             
        </header>        
      </div>
    )     
  }
}

export default App;
