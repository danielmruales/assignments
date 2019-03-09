import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Home.css'
import { withGlobal } from '../GlobalData';


class Home extends Component{
    constructor (){
        super()
        this.state ={
            provo:    "lat=40.2338&lon=-111.6585",
            saltLake: "lat=40.7608&lon=-111.8910",
            zions: "lat=37.2982&lon=-113.0263",
        }
    }


submitButton = e => {
    e.preventDefault()
    
}


    render (){
    return (
        <div className='homeDiv'>
            <h1 className='welcome'> Welcome To WanderLust </h1>
            <h2 className='subwelcome'>Find adventure by selecting a city below</h2>
            
                <select onChange={e => this.props.handleSelectedCity(e.target.value)} className='selector'>
                    <option>Select a City</option>
                    <option value={this.state.saltLake}>Salt Lake City</option>
                    <option value={this.state.provo}>Provo</option>
                    <option value={this.state.zions}>Zions</option>
                </select>
                {/* <button className='submitBtn'> Submit </button> */}
                <Link className='linkBtn' to='/hikes' onClick={this.toggle}>Submit</Link>
        </div>
        )
    }
}

export default withGlobal(Home);