import React, { Component } from 'react';
import Timer from '../components/Timer';
class Timers extends Component{
    renderTimers = () => {
        this.props.timers.map(timer => <Timer delete={this.props.deleteTimer} className={card} name={timer.name} time={timer.time}/>)
    }
    render()
    {   <div>
            <img src={logo} className="App-logo" alt="logo" />
            {this.renderTimers}
        </div>
    }
} 
export default Timers