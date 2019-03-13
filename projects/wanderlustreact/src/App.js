import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Hikes from './Hikes/Hikes'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import './App.css';
import DetailHike from './Hikes/DetailHike';

const App = () => {
    return (
      <div className="App">
        
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/hikes" component={Hikes}/> 
            <Route path="/contact" component={Contact}/>
            <Route path="/hikes/:id" component={DetailHike} />
          </Switch>
        <Footer/>
      </div>
    );
}

export default App;
