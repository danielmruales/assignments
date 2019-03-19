import React, { Component } from 'react';
import axios from 'axios'

const {Provider, Consumer} = React.createContext();

class GlobalData extends Component {
    constructor(){
        super()
        this.state = {
            bounties: []
        }
    }

    getBounty = () => {
        axios.get('/bounties').then(response => {
            this.setState({bounties:response.data.bounties})
        })
    }

    render() {
        
        return (
            
                <Provider value={
                    {
                    ...this.state,
                    getBounty: this.getBounty
                    }
            }
                >

                {this.props.children}
                </Provider>
           
        );
    }
}

export default GlobalData;

export function withGlobalData (C) {
    return props => <Consumer>
                     {value => <C {...value} {...props}/>}
                    </Consumer>
}