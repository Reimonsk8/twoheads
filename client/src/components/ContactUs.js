import React from 'react'
import './ContactUs.css'
import { Container, Image } from 'semantic-ui-react';
import banner from '../imgs/two_heads_background.jpg'

const ContactUs = React.forwardRef((props, ref) =>{
    return(
        <div ref={ref} id="BackgroundContact">
            <div id="ImageImpostor"/>
            <p>Two Heads Co.</p>
            <p>💵💳 Envíos a todo México 📦</p>
            <h1>CONTACT US</h1>
        </div>
    )    
});

export default ContactUs;