import React, {Component} from 'react';
import './App.css';
import Display from'./components/Display/Display'
import Keys from './components/Keys/Key'

class App extends Component {
  constructor (){
    super();
    this.state = {
      input: "0",
      previouse: "",
      buffer: ""
    }
  }
  
  number = (e) => { 
    if (this.state.input === "0" && e !== ".") {
      this.setState({input: e});
      return
    }

    if (e === "." && (this.state.input).includes(".")) return;      
    this.setState({input: (String(this.state.input) + String(e))})            
  } 

  operation = (e) => { 
    if (this.state.buffer === "") {      
      this.setState({previouse: Number(this.state.input)});
      this.setState({buffer: e});
      this.setState({input: ""});                 
    }else{
      this.equal();
    }                     
  }

  equal = () => {          
      this.setState({ input: eval(
          this.state.previouse 
        + this.state.buffer 
        + Number(this.state.input))})
      this.setState({buffer: ""});   
  }
  
  del = (e) => {
    if ((this.state.input).length > 1) {
      this.setState({input: (this.state.input).slice(0, -1) });
    } else {
      this.setState({input: "0"}); 
    }            
  }

  clear = (e) => {
    this.setState({input: "0"});
    this.setState({buffer: ""});
    this.setState({previouse: ""});
  }  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Display className = "display" 
                input = {this.state.input}
                previouse = {this.state.previouse}
          />
          <Keys numberButtons = {this.number}
                operationButtons = {this.operation}
                equalButtons = {this.equal}
                delButton = {this.del}
                clearButton = {this.clear}
          />             
        </header>        
      </div>
    )     
  }
}

export default App;
