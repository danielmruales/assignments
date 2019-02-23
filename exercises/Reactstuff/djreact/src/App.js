import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      box1: 'red',
      box2: 'white',
      box3: 'white',
      box4: 'white'
    }
  }
  
    colorChangeTop = () => {
        this.setState((prevState)=>{
          return {
            box1: 'black',
            box2: prevState.box2 = 'black'
          }
        })
    }


  render() {
    return (
    <div id='container'>

      <div className= {this.state.box1}></div>
      <div className={this.state.box2}></div>
      <div className='boxthree'></div>
      <div className='boxfour'></div>

      <button id="button1" onClick={this.colorChangeTop}>submit</button>

    </div>
    );
  }
}

export default App;
