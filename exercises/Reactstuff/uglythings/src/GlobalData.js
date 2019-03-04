import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext()

class GlobalData extends Component {
    constructor(){
        super()

        this.state = {

        }
    }
    render() {
        return (
            <>
              <Provider >
                  
                  </Provider>  
            </>
        );
    }
}

export default GlobalData;