import React, {Component} from 'react';
import './Contact.css'
import { withGlobal } from '../GlobalData';

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
        <div className={this.props.toggle ? 'mainContactDiv' : 'thanksMsg'}>

            <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"></link>
            <h1 className='question'> Have Questions or Suggestions? </h1>
            <p className='directions'> Fill out the form below and one of our awesome team members will reach out! </p>

            <form className='contact' onSubmit={this.submit}>

                <input type='text' placeholder='Name' required></input>
                <input type='email' placeholder='Email' required></input>
                <input type='phone' placeholder='Phone' required></input>
                <input type='text' placeholder='City'></input>

                <select >
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

export default withGlobal(Contact);