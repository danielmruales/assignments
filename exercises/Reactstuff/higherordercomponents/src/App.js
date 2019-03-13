import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage'
import DownCount from './DownCount'
import CountUp from './CountUp'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeMessage/>
        <DownCount/> 
        <CountUp value={20}/>
      </div>
    );
  }
}

export default App;
