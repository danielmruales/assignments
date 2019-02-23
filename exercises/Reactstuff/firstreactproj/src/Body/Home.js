import React, {Component}from 'react';
import './Home.css'

class Home extends Component {
    constructor(){
        super()
        
        this.state={
            counter: 0
        }
    }

        add = ()=> {
            this.setState((prevState)=>{
                return {
                    counter: prevState.counter +10
                }
            })
        }


        add1 = ()=> {
            this.setState((prevState)=>{
                return {
                    counter: prevState.counter +1
                }
            })
        }




        render(){
        return (
        <div id="homeDiv">

            <h1 className="firsth1"> Total Points: {this.state.counter}</h1>
            <button className="button1" onClick={this.add1}>+1</button>
            <button className="button10" onClick={this.add}>+10</button>

        </div>
            )
         }
}

export default Home;