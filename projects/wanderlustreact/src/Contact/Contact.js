import React, {Component} from 'react';
import './Contact.css'

class Contact extends Component{

    constructor(){
        super()
        this.state = {

        }
    }

    submit = e => {
        e.preventDefault()
    }

    render (){
    return (
        <div className='mainContactDiv'>

            <h1 className='question'> Have Questions or Suggestions? </h1>
            <p className='directions'> Fill out the form below and one of our awesome team members will real out! </p>

            <form className='contact' onSubmit={this.submit}>

                <input type='text' placeholder='Name'></input>
                <input type='email' placeholder='Email'></input>
                <input type='phone' placeholder='Phone'></input>
                <input type='text' placeholder='City'></input>

                <select>
                    <option value='default'>Select</option>
                    <option value='utah'> UT </option>
                    <option value='colorado'> CO </option>
                    <option value='arizona'> AZ </option>
                </select>
                <button>Submit</button>
            </form>
        </div>
        );
    }
};

export default Contact;