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
            <div className="flex-center">
                <a href="https://www.facebook.com/twoheadsclothing/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook fa-2x icon-3d"/>
                </a>
                <a href="https://www.instagram.com/twoheadsclothing/?hl=es-la" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram fa-2x icon-3d"/>
                </a>
                <a href="twoheadsclothing@outlook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-whatsapp fa-2x icon-3d"/>
                </a>
                <span className="stretch"></span>
            </div>
        </div>
    )    
});

export default ContactUs;