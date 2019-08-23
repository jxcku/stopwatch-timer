import React, { Component } from "react";
import "./App.css";

class Timer extends Component {

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
      startTime: this.state.currentTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.currentTime - 1000;
      if (newTime >= 0) {
        this.setState({
          currentTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ isTimerOn: false });
        alert("Over");
      }
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ isTimerOn: false });
  };
  resetTimer = () => {
    if (this.state.isTimerOn === false) {
      this.setState({
        currentTime: this.state.startTime
      });
    }
  };

  adjustTimer = input => {
    const { currentTime, isTimerOn } = this.state;
    if (!isTimerOn) {
      if (input === "incHours" && currentTime + 3600000 < 216000000) {
        this.setState({ currentTime: currentTime + 3600000 });
      } else if (input === "decHours" && currentTime - 3600000 >= 0) {
        this.setState({ currentTime: currentTime - 3600000 });
      } else if (input === "incMinutes" && currentTime + 60000 < 216000000) {
        this.setState({ currentTime: currentTime + 60000 });
      } else if (input === "decMinutes" && currentTime - 60000 >= 0) {
        this.setState({ currentTime: currentTime - 60000 });
      } else if (input === "incSeconds" && currentTime + 1000 < 216000000) {
        this.setState({ currentTime: currentTime + 1000 });
      } else if (input === "decSeconds" && currentTime - 1000 >= 0) {
        this.setState({ currentTime: currentTime - 1000 });
      }
    }
  };

  render() {
    const { currentTime, startTime, isTimerOn } = this.state;
    let seconds = ("0" + (Math.floor((currentTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((currentTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((currentTime / 3600000) % 60)).slice(-2);

    return (
      <div style={{'background': '#000'}}>
        <div>Countdown</div>
        <div>Hours : Minutes : Seconds</div>
        <div>
          <button onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
          <button onClick={() => this.adjustTimer("incMinutes")}>
            &#8679;
          </button>
          <button onClick={() => this.adjustTimer("incSeconds")}>
            &#8679;
          </button>

          <div>
            {hours} : {minutes} : {seconds}
          </div>

          <button onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
          <button onClick={() => this.adjustTimer("decMinutes")}>
            &#8681;
          </button>
          <button onClick={() => this.adjustTimer("decSeconds")}>
            &#8681;
          </button>
        </div>

        {isTimerOn === false && (startTime === 0 || currentTime === startTime) && (
          <button onClick={this.startTimer}>
            Start
          </button>
        )}
        {isTimerOn === true && currentTime >= 1000 && (
          <button onClick={this.stopTimer}>
            Stop
          </button>
        )}
        {isTimerOn === false &&
          (startTime !== 0 && startTime !== currentTime && currentTime !== 0) && (
            <button onClick={this.startTimer}>
              Resume
            </button>
          )}

        {(isTimerOn === false || currentTime < 1000) &&
          (startTime !== currentTime && startTime > 0) && (
            <button onClick={this.resetTimer}>
              Reset
            </button>
          )}
      </div>
    );
  }
}

export default Timer;
