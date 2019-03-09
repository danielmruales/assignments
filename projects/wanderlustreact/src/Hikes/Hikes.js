import React, { Component } from 'react';
import './Hikes.css'
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
                <img src={trail.imgSmall} className='resultPics'/>
                <h3 key={i} className='subTitle'> {trail.name} </h3>
                <p className='stars'> Stars: {trail.stars}</p>
            </div>

        )
        }
        )
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