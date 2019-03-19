import React, { Component } from 'react';
import { withGlobalData } from '../GlobalData';
import './Form.css'

class Form extends Component {

   

  
  render() {
        return (
            <div>
                <form className='bountyEntry' onSubmit={this.submit}>
                    <input type='text' placeholder='First Name' required/>
                    <input type='text'placeholder='Last Name'/>
                    <input type='number' placeholder='Price' required/>
                    <select>
                        <option>Select type</option>
                        <option>SITH</option>
                        <option>JEDI</option>
                    </select>
                    <label> <input type='radio' name='health' required /> Alive </label>
                    <label> <input type='radio' name='health' required/> Eleminated </label>
                    <button className='btn'>Submit</button>
                </form>
            </div>
        );
    }
}

export default withGlobalData(Form);