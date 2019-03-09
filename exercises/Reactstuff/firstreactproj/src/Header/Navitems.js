import React from 'react';
import {Link} from 'react-router-dom';


const NavbarItems = () => {
    return (
    <nav id="nav2">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>

        <ul className="list">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Code</Link></li>
            <li><Link to='/contact'> UX </Link></li>
            <li><Link to='/contact'> Contact</Link></li>
            
        </ul>
    </nav>   
    )
}

export default NavbarItems


            
            