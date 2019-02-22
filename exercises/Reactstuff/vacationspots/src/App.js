import React from 'react';
import VacayAreas from './VacayAreas'
// import './App.css'

const vacaySpots = [

    {
      place: "Rome, Italy",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "DisneyWorld, Florida",
      price: 900,
      timeToGo: "Fall"
    },{
      place: "Bejing, China",
      price: 1200,
      timeToGo: "Winter"
    },{
      place: "Switerzland",
      price: 1100,
      timeToGo: "Summer"
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
    <div> 
      {mappedSpots}
    </div>
  )
}



export default App;
