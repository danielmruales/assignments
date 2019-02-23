import React from 'react';
import VacayAreas from './VacayAreas'
import './App.css'

const vacaySpots = [

    {
      place: "Rome, Italy",
      price: 40,
      timeToGo: "Spring",
      imgUrl:"https://gq-images.condecdn.net/image/PgrDjdmkEpM/crop/405/landscape/f/Rome-hp-GQ-24May16_istock_b.jpg"
    },{
      place: "DisneyWorld, Florida",
      price: 900,
      timeToGo: "Fall",
      imgUrl: "https://i1.wp.com/thepointsguy.com/wp-content/uploads/2019/08/disney-world-resort.jpg?resize=480%2C270px&ssl=1"
    },{
      place: "Beijing, China",
      price: 1200,
      timeToGo: "Winter",
      imgUrl: "http://img.timeoutbeijing.com/201702/20170214122812289.jpg"
    },{
      place: "Switzerland",
      price: 1100,
      timeToGo: "Summer",
      imgUrl: "http://onebigphoto.com/uploads/2015/07/a-view-on-matterhorn-switzerland.jpg"
    },{
      place: "Paris, France",
      price: 400,
      timeToGo: "Summer",
      imgUrl: "https://i.ytimg.com/vi/_FYKIhJZdaI/maxresdefault.jpg"
    }
  ]


const App = () => {
  
const mappedSpots = vacaySpots.map((vacaySpot, i)=>{
  return (
    <VacayAreas name={vacaySpot.place} key={i+VacayAreas.name}
                price={vacaySpot.price}
                imgUrl={vacaySpot.imgUrl}
                timeToGo={vacaySpot.timeToGo}
    
    />
  )
})
  
  
  
  return (
    <div id="body"> 
      {mappedSpots}
    </div>
  )
}



export default App;
