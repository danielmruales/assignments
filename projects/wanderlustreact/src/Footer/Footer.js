import React from 'react';
import './Footer.css'
import {SocialIcon} from 'react-social-icons' 

const Footer = () => {
    return (
        <div className='footer'>
           <SocialIcon url="http://facebook.com/danielmruales" fgColor="white" bgColor="none"/>
           <SocialIcon url="http://linkedin.com/in/danielmruales" fgColor="white" bgColor="none"/>
           <SocialIcon url="http://twitter.com/danielmruales" fgColor="white" bgColor="none"/>
           <SocialIcon url="http://github.com/danielmruales" fgColor="white" bgColor="none"/>
        </div>
    );
};

export default Footer;