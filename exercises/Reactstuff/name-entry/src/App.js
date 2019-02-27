import React, {Component} from 'react';
import './App.css';

class App extends Component {
  // const oldNames = []
  constructor(){
    super()
    this.state={
      fullName: '',
      names: []
      
    }
  }
  
  handleChange = (e) => {
    this.setState({
      fullName: e.target.value
    })
  }
  
  submitButton = (e) => {
    e.preventDefault();
    this.setState({fullName: '', name: ''})
  }

  


    render(){
      const styles = {
        color: 'red',
        fontSize: 200,
        textAlign: 'center'
      }

      const mappedOldNames = this.state.names.map((name) => {
        return <li>Hi</li>
      })
      return (

        <div>
           <form>
          <input type="text"  placeholder='Full Name' onChange={this.handleChange} name='inputBox'></input>
          <h1>{this.state.fullName}</h1>
          <button onClick={this.submitButton}> Submit </button>
          <ol>
            {mappedOldNames}
          </ol>
          </form>
          <h2 style={styles}>How are you?</h2>
          </div>

      );
    }
  }



export default App;




// value={this.state.fullName}

/* <li>{this.state.fullName}</li>
<li>{this.state.fullName}</li>
<li>{this.state.fullName}</li>
<li>{this.state.fullName}</li> */





