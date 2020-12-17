import React, {Component} from 'react';
import './App.css';
import Display from'./components/Display/Display'
import Keys from './components/Keys/Key'

class App extends Component {
  constructor (){
    super();
    this.state = {
      input: "0"
    }
  }

  keylog = (e) => {
    const currentState = this.state.input;    
    const buttonValue = e.target.textContent;
    const nameOfClass = e.target.className;

    if (currentState === "0" && nameOfClass === "button number") {
      this.setState({input: buttonValue});

    }else {

      if ( buttonValue === "AC" ) {
        this.setState({input: "0"});
      }

      if (nameOfClass === "button number" ) {
        const appendNumber = parseInt(String(currentState) + String(buttonValue));        
        this.setState({input: appendNumber});  
        console.log()       
        
      }      
    } 
    
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Display input = {this.state.input} className = "display"/>
          <Keys keyLogs= {this.keylog}/>             
        </header>
        
      </div>
    )     
  }
}

export default App;
