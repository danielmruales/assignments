import React from 'react';
import NavbarItems from './Navitems';
import Header from './Header'
import './Navbar.css'


const Navbar = () => {
    return (
    <header id='mainheader'>
       <div id='container'> 
            < Header />
            < NavbarItems />
       </div>
    </header>
    )
}

export default Navbar

