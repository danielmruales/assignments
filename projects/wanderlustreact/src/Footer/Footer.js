import React from 'react';
import './Footer.css'
import {SocialIcon} from 'react-social-icons' 

const Footer = () => {
    return (
        <div className='footer'>
           <SocialIcon url="http://facebook.com/danielmruales" fgColor="white" bgColor="#2BB0C1"/>
           <SocialIcon url="http://linkedin.com/in/danielmruales" fgColor="white" bgColor="#2BB0C1"/>
           <SocialIcon url="http://twitter.com/danielmruales" fgColor="white" bgColor="#2BB0C1"/>
           <SocialIcon url="http://github.com/danielmruales" fgColor="white" bgColor="#2BB0C1"/>
        </div>
    );
};

export default Footer;