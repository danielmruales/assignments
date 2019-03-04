import React, {Component} from 'react';

class Counting extends Component {
    constructor (){
        super()
        this.state = {
            addition: 0
        }
    }



    add = () => {
        this.setState(prevState =>{
           return{ 
               addition: prevState.addition + 10
            }
        })   
    }

    render(){
        const Comp = this.props.component
        return (
            <Comp addition={this.state.addition} add={this.add}{...this.props}/>
        )
    }
    }

    export default Counting; 

    export function withCounting(C) {
        return function(props){
            return <Counting component={C}{...props}/>
        }
    }
