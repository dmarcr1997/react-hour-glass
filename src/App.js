import React, {Component} from 'react';
import TimerForm from './components/TimerForm';
import './App.css';

class App extends Component{
  state = {
    timers: [] 
  }

  handleSubmit = (formState) => {
    let newTimers = [...this.state.timers, formState];
    this.setState({
      timers: newTimers
    })
    console.log(this.state);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <TimerForm submit={this.handleSubmit} /> 
        </header>
      </div>
    );
  }
}

export default App;
