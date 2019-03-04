import React, {Component} from 'react';

class WelcomeProp extends Component {
    constructor (){
        super ()
        this.state = {
            welcome: false
        }
    }

    showWelcome = () => {
        this.setState(prevState => {
            return {
                welcome: !prevState.welcome
            }
        })
    }

    render(){
        const Comp = this.props.component
        return (
            <Comp welcome={this.state.welcome} showWelcome={this.showWelcome}{...this.props}/>
        )
    }
}

export default WelcomeProp;

export function withWelcomeProp(C) {
    return function (props){
       return <WelcomeProp component={C}{...props}/>
    }
}


