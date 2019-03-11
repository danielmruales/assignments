import React, { Component } from 'react';
import './Hikes.css'
// import DetailHike from './DetailHike'
// import {Link, Switch, Route} from 'react-router-dom'
import { withGlobal } from '../GlobalData';

class Hikes extends Component {
    
    componentDidMount(){
        this.props.getCityInfo()
    }

    render() {
        // console.log(this.props.hikes)
        const mappedHikes = this.props.hikes.map((trail, i) => {
        return (
            <div>
                <img src={trail.imgSmall} className='resultPics' alt='mapped' key={i}/>
                <h3 className='subTitle'> {trail.name} </h3>
                <p>Total Length: {trail.length} miles </p>
                <p className='stars'> Stars: {trail.stars}</p>
            </div>

)
}
)


// const hikeDetails = this.props.hikes.map(hike => <Link to={`/hikes/${hike.id}`}>{hike.name}</Link>)
// return (
//     <div></div>
// )
return (
    <div className='hikesMainDiv'>
                <h1 className='leTitle'> Explore Hikes Near You! </h1>
                <div className='hikes'>
                
                    {mappedHikes}
                
                </div>
            </div>

);
}
}

export default withGlobal(Hikes);