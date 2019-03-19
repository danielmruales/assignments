import React, { Component } from 'react';
import {withGlobalData} from '../GlobalData'

class Bounties extends Component {
    

    componentDidMount(){
        this.props.getBounty()
        console.log(this.props.getBounty())
    }
    
    
    render() {
        return (
            <div>
               <h1>hello</h1> 
            </div>
        );
    }
}

export default withGlobalData(Bounties);