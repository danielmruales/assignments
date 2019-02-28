import React from 'react';
import Navbar from './Header/Navbar';
import Home from './Home-Tab/Home';
import Projects from './Projects-Tab/Projects'
import Contact from './Contact-Tab/Contact'
import Footer from './Footer-Section/Footer'
import {Switch, Route} from 'react-router-dom';

import './App.css'



const App  = () => {
    return (
        <div className='app'>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Projects' component={Projects}/>
                <Route path='/Contact' component={Contact}/>
            </Switch>
            <Footer/>
        </div>
        
    )
}

export default App;
