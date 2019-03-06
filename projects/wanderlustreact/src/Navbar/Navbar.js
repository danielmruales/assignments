import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <div className='containerDiv'>
        {/* <div className='navDiv'> */}
                {/* <ul> */}
                    <h1 className='title'>WanderLust</h1>
                     <Link to="/" className='navItems'>Home</Link>
                    <Link to="/hikes" className='navItems'>Hikes</Link>
                    <Link to="/contact" className='navItems'>Contact</Link>
                {/* </ul> */}
            {/* </div> */}
    </div>
    );
};

export default Navbar;
