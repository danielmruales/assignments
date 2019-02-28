import React, {Component} from 'react';
import Header from './Header/Header'
import Body from './Body'
import './App.css'

class App extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    )
  }
}

export default App;