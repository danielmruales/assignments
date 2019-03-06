import React, {Component} from 'react';
import './Home.css'


class Home extends Component{
    constructor (){
        super()
        this.state ={
            cities: []
        }
    }


submitButton = e => {
    e.preventDefault()
}


    render (){
    return (
        <div className='homeDiv'>
            <h1 className='welcome'> Welcome To WanderLust </h1>
            <h2 className='subwelcome'>Find adventure by inputing a city below</h2>
            <form onSubmit={this.submitButton}>
                <input type='text' placeholder="City"></input>
                <button className='submitBtn'> Submit </button>
            </form>
        </div>
        )
    }
}

export default Home;