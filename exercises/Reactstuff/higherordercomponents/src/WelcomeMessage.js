import React from 'react'
import {withWelcomeProp} from './HigherOr/WelcomeProp'

const WelcomeMessage = ({showWelcome, welcome}) => {
    return (
        <div>
            <h1>Click Below!</h1>
            <button onClick={showWelcome}> Click Me! </button>
            <h2 className={welcome ? 'show' : 'hide'} >Slytherin are ASSHOLES!</h2>
        </div>
    )
}

export default withWelcomeProp(WelcomeMessage);