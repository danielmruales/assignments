import React, {Component} from 'react';
import axios from 'axios'
import './Body.css'

class Body extends Component {
    constructor (){
        super()

        this.state = {
            people: []
        }

    }

   
 componentDidMount(){
    axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
        this.setState({
            people: response.data
        })
    })
}

    render(){
        const mappedPeople = this.state.people.map((person, i) => {
            return (
                <div key={i}>
                    {person.name} 
                </div>
            )
        })

        return(
            <div className='mainDiv'>
                <div>
                    <h1 className='badDudes'>{mappedPeople}</h1>
                </div>
            </div>
        )
    }

}

export default Body;






// let oCount = 0
// 		let xCount = 0
// 		for(let i=0; i<str.length; i++){
// 			if(str[i].toLowerCase() === 'o'){
// 				oCount++
// 			} else if(str[i].toLowerCase() === 'x'){
// 				xCount++
// 			}
// 		}
	
// 	return xCount === oCount

//function XO(str) {
//     const x = str.toLowerCase().split('').filter(str => str === 'x')
//     const o = str.toLowerCase().split('').filter(str => str === 'o')
//     return x.length === o.length
// }