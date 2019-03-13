import React, { Component } from 'react';
import './Hikes.css'
import {Link} from 'react-router-dom'
import { withGlobal } from '../GlobalData';

class Hikes extends Component {

    
 
    componentDidMount(){
        this.props.getCityInfo()
    }

    render() {
       
        const mappedHikes = this.props.hikes.map((trail, i) => {
        return (
            <Link to={`/hikes/${trail.id}`} className='linkDiv'>
            <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"></link>
                <img src={trail.imgSmall === "" ? 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_36722630_Full.jpg?crop=0,0,6549,4912&wid=175&hei=117&scl=11.291954022988506' : trail.imgSmall} className='resultPics'  alt='mapped' key={i}/>
                <h3 className='subTitle'> {trail.name} </h3>
                <h4 className='stars'> Stars: {trail.stars}</h4>
            </Link>

)
}
)

return (
    <div className='hikesMainDiv'>
                <h1 className='leTitle'> Choose A Hike Below!</h1>
                
                <div className='hikes'>
                
                    {mappedHikes}
                
                </div>
            </div>

);
}
}

export default withGlobal(Hikes);