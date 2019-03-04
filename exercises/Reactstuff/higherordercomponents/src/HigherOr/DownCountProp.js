import React, {Component} from 'react';

class DownCountProp extends Component {
    constructor (){
        super ()
        this.state = {
            subtract: 1000
        }
    }

    countDown = () => {
        this.setState(prevState => {
            return{
                subtract: prevState.subtract -100
            }
        })
    }

    render(){
        const Comp = this.props.component;
        return (
            <Comp subtract={this.state.subtract} countDown={this.countDown}{...this.props}/>
        )
    }

}

export default DownCountProp;

export function withDownCountProp (C) {
    return function(props){
        return <DownCountProp component={C}{...props}/>
    }

    
}