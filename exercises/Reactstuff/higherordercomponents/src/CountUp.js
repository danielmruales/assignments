import React from 'react';

import { withCounting } from './HigherOr/Counting';

const CountUp = ({add, addition}) => {
    return (
        <div>
            <button onClick={add}> Press Me! (: </button>
            <h1> {addition}</h1>
        </div>
    )
}

export default withCounting(CountUp)