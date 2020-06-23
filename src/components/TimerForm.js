import React, { Component } from 'react';

class TimerForm extends Component{
    state = {
        name: '',
        time: 0
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.props.submit(this.state)
        this.setState({
            name: '',
            time: 0
        })
    }
    handleChange = event =>{
        
        this.setState({
            name: event.target.value
        })
    } 
    increment = (event) => {
        event.preventDefault();
        let prevTime = this.state.time + 1;
        this.setState({
            time: prevTime
        })
    }
    decrement = (event) => {
        event.preventDefault();
        let prevTime = this.state.time;
        if (prevTime > 0){
            prevTime -= 1;
            this.setState({
                time: prevTime
            })
        }
        else{
            alert("Cannot Have Negative Time!");
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type ='text' name='timerName' onChange={this.handleChange} value={this.state.name}/>
                    <button onClick={this.increment}>+</button>
                    <h4>{this.state.time}</h4>
                    <button onClick={this.decrement}>-</button>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
} 

export default TimerForm