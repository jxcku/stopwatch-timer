import React, { Component } from "react";

import Stopwatch from "./stopwatch";
import Countdown from "./timer";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'tab': 0
    }
  }
  switchTab(val){
    this.setState({
      tab: val
    })
  }
  render() {
    return (
      <div className="container">
        <div className="containerTitle">Google Stopwatch Clone</div>
        <div className="tabs">
          <div className={this.state.tab == 0 ? 'active' : ''} onClick={() => this.switchTab(0)}>
            Stopwatch
          </div>
          <div className={this.state.tab == 1 ? 'active' : ''} onClick={() => this.switchTab(1)}>
            Timer
          </div>
        </div>
        <div>
          <div style={{display: this.state.tab == 0 ? 'block' : 'none'}}>
            <Stopwatch />
          </div>
          <div style={{display: this.state.tab == 1 ? 'block' : 'none'}}>
            <Countdown />
          </div>
        </div>
      </div>
    );
  }
}

export default App;