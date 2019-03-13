import React from 'react';
import './Footer.css'
import {SocialIcon} from 'react-social-icons' 

const Footer = () => {
    return (
        <div className='footer'>
           <SocialIcon url="http://linkedin.com/in/danielmruales" target="_blank" fgColor="white" bgColor="none"/>
           <SocialIcon url="http://twitter.com/danielmruales" target="_blank" fgColor="white" bgColor="none"/>
           <SocialIcon url="http://github.com/danielmruales" target="_blank" fgColor="white" bgColor="none"/>
        </div>
    );
};

export default Footer;