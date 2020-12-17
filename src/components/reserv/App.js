import React, {Component} from 'react';
import './App.css';
import Display from'./components/Display/Display'
import Keys from './components/Keys/Key'

class App extends Component {
  constructor (){
    super();
    this.state = {
      input: "0",
      buffer: ""
    }
  }

  number = (e) => {

    if (this.state.input === "0") {
      this.setState({input: e});
      return
    }
    
    if (this.state.buffer === ""){  
    const appendNumber = String(this.state.input) + String(e);
    this.setState({input: appendNumber}); 
    }
  } 

  operation = (e) => {
    const previous = this.state.input;     
  } 

  equal = (e) => {
    console.log("3: " + e)
  }
  
  del = (e) => {
    console.log("4: " + e)
  }

  cler = (e) => {
    this.setState({input: "0"});
    this.setState({buffer: ""});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Display className = "display" 
                input = {this.state.input}

          />
          <Keys numberButtons = {this.number}
                operationButtons = {this.operation}
                equalButtons = {this.equal}
                delButton = {this.del}
                clearButton = {this.cler}
          />             
        </header>        
      </div>
    )     
  }
}

export default App;
