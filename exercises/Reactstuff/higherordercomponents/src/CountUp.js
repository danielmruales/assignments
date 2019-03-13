import React from 'react';

import { withCounting } from './HigherOr/Counting';

const CountUp = ({add, addition}) => {
    return (
        <div>
            <h1> {addition}</h1>
            <button onClick={add}> Press Me! (: </button>
        </div>
    )
}

export default withCounting(CountUp)