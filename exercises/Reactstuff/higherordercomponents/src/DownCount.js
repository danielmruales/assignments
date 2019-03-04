import React from 'react'
import {withDownCountProp} from './HigherOr/DownCountProp'

const DownCount = ({countDown, subtract}) => {
    return (
        <div>
            <h1>{subtract}</h1>
            <button onClick={countDown}>Press Here, I dare you!</button>
        </div>
    )
}

export default withDownCountProp(DownCount);