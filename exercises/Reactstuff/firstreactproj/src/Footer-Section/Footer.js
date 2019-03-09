import React from 'react';
import './Footer.css'
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
    return (
        <div id='footer'>
           {/* <SocialIcon url="http://facebook.com/danielmruales" fgColor="white" bgColor="black"/> */}
           <SocialIcon url="http://linkedin.com/in/danielmruales" fgColor="white" bgColor="black"/>
           <SocialIcon url="http://twitter.com/danielmruales" fgColor="white" bgColor="black"/>
           <SocialIcon url="http://github.com/danielmruales" fgColor="white" bgColor="black"/>
        </div>
    )
}

export default Footer;