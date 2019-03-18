import React, { Component } from 'react';
import Header from './Header/Header'
import Form from './Form/Form'
import Bounties from './Bounties/Bounties'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Form/>
        <Bounties/>
      </div>
    );
  }
}

export default App;
