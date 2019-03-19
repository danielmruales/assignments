import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext;
import axios from 'axios';

class GlobalData extends Component {
    constructor(){
        super()
        this.state = {
            bounties: []
        }
    }

    postBounty = () => {
        axios.get('/bounties', this.state).then(res =>{
            bounties
            console.log(bounties)
        })
    }

    render() {
        return (
            <div>
                <Provider>

                </Provider>
            </div>
        );
    }
}

export default GlobalData;

export function withGlobalData (C) {

}