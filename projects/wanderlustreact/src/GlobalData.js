import React, { Component } from 'react';
import axios from 'axios'
const {Provider, Consumer} = React.createContext()


class GlobalData extends Component {
    constructor(){
        super()

        this.state = {
            hikes: [],
            selected: false,
            selectedCity: ""
         
        }
    }



toggle = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
        selected: !prevState.selected
    }))
}

handleSelectedCity = (city) => {
    this.setState({selectedCity: city })
    console.log(city)
}


 getCityInfo = () => {
    axios.get(`https://www.hikingproject.com/data/get-trails?${this.state.selectedCity}&maxDistance=10&maxResults=8&key=200426412-75b15aed6a0bf5c7a1b88f7911544292`).then(response => {
        this.setState({hikes: response.data.trails})
        console.log(response.data.trails)
       })    
}


    render() {
        // console.log(this.state.hikes)
        return (
            
            <div>
                <Provider value={{
                    ...this.state,
                    toggle: this.toggle,
                    handleSelectedCity: this.handleSelectedCity,
                    getCityInfo: this.getCityInfo
                    
                    }}>
                
                    {this.props.children}
                
                </Provider>
            </div>
        );
    }
}

export default GlobalData;

export function withGlobal(C){
    return props => <Consumer>
                        {value=> <C {...value}{...props}/>}
                    </Consumer>
}