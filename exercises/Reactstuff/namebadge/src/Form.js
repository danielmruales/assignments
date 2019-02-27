import React, {Component} from 'react'
import Badge from './Badge'

class Form extends Component {
    constructor (){
        super()

        this.state = {
            inputs: {
                firstName: '',
                lastName: '',
                email: '',
                birth: '',
                phone: '',
                favFood: '',
                about: ''
        },
            badges: []
        }
    }


    handleChange = e => {
        const {name, value} = e.target
        this.setState(prevState => {
            return {
                inputs: {
                ...prevState.inputs,
                [name]: value
                }
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                badges: [prevState.inputs, ...prevState.badges]
                
            }
        })
    }



    render () {
        let {firstName, lastName, email, birth, phone, favFood, about} = this.state.inputs

        const mappedBadges = this.state.badges.map((badge, i)=> <Badge  key={badge.firstName + i} badge={badge} />)


        return (
            <div>
                <form>

                    <input type="text" name='firstName' placeholder='First Name' value={firstName} onChange={this.handleChange}/>
                    <input type="text" name='lastName' placeholder='Last Name' value={lastName} onChange={this.handleChange}/>
                    <input type="email"name='email' placeholder='E-mail' value={email} onChange={this.handleChange}/>
                    <input type="text" name='birth' placeholder='Place of Birth' value={birth} onChange={this.handleChange} />
                    <input type="phone" name= 'phone' placeholder='Phone Number' value={phone} onChange={this.handleChange} />
                    <input type="text" name='favFood' placeholder='Favortie Food' value={favFood} onChange={this.handleChange} />
                    <input type="text" name='about' placeholder='About' value={about} onChange={this.handleChange} />

                    <button onSubmit={this.state.handleSubmit}>Submit</button>
                </form>
                {mappedBadges}
            </div>

        );
    }
}

export default Form;