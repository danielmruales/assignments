import React from 'react';
import PropTypes from 'prop-types';
const VacayAreas = (props) => {
        console.log(props)
        return (
            <div>
                <h1>{props.name} </h1>
                <h2>{props.price}</h2>
                <img src={props.imgUrl} alt='shit dont workk bro'></img>
                <h3> Best time to vist is in {props.timeToGo}!</h3>
            </div>
        )
}


VacayAreas.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    imgUrl: PropTypes.string
}

export default VacayAreas;