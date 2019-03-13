import React from 'react';
import './HikeDetailed.css'
import {withGlobal} from '../GlobalData'

const DetailHike = (props) => {
    let {id} = props.match.params
    let hike = props.hikes.find(hike => hike.id === +id)
    return (
        <div className='container'>
            <h1 className='name'>{hike.name}</h1>
            <div className='picture'>
            <img src={hike.imgMedium === "" ? 'https://images.unsplash.com/photo-1547903006-2845abe6e3c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80' : hike.imgMedium} className='detailPic'  alt='mapped' />
            </div>
            <h3 className='summary'>Summary: {hike.summary} </h3>
            <h3 className='length'>Total Length: {hike.length} miles </h3>
            <h3 className='location'>Exact Location: {hike.location}</h3>
        </div>
    );
};

export default withGlobal(DetailHike);