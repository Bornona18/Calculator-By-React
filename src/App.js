import React, {Component} from 'react';
import "./App.css";
import Calculate from "./Components/Calculate";
import Output from "./Components/Output";

class App extends Component{
  state={
    result:''
  }

  buttonPressed = buttonName => {
    if(buttonName === '='){
      this.Calculate()
    } else
    if (buttonName === 'C'){
      this.reset()
    } else 
      this.setState({
        result : this.state.result + buttonName
    });
  };

  reset =() => {
    this.setState({
      result:''
    })
  }
    


  Calculate =() => {
    try {
    this.setState({
      result: eval(this.state.result)

      });
    } catch(event) {
      this.setState({
      result: "error"
    });
  }
  };

  render() {
    return (
      <div className="App">
      <div className="calc-body">
      <Output result={this.state.result}/>
      <Calculate buttonPressed={this.buttonPressed} />
      </div>
      </div>
    );
  }
}

export default App;
