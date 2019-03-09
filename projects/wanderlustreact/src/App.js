import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Hikes from './Hikes/Hikes'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import './App.css';

const App = () => {
    return (
      <div className="App">
        
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/hikes" component={Hikes}/> 
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    );
}

export default App;
