import React, { Component } from "react";
import "./App.css";

class Stopwatch extends Component {

  constructor(props){
    super(props);
    this.state = {
      isTimerOn: false,
      startTime: 0,
      currentTime: 0
    }
  }

  startTimer = () => {
    this.setState({
      isTimerOn: true,
      currentTime: this.state.currentTime,
      startTime: Date.now() - this.state.currentTime
    });
    this.timer = setInterval(() => {
      this.setState({
        currentTime: Date.now() - this.state.startTime
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ isTimerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      startTime: 0,
      currentTime: 0
    });
  };

  render() {
    const { currentTime } = this.state;
    let ms = ("0" + (Math.floor(currentTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(currentTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(currentTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(currentTime / 3600000)).slice(-2);
    return (
      <div style={{'background': '#000'}}>
        <div>Stopwatch</div>
        <div>
          {hours != "00" ? `${hours} :` : ''}  {minutes != "00" ? `${minutes} :` : ''} {seconds} : {ms}
        </div>
        {this.state.isTimerOn === false && this.state.currentTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.isTimerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.isTimerOn === false && this.state.currentTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.isTimerOn === false && this.state.currentTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default Stopwatch;