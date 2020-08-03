import React from 'react'
import './AboutMe.css'
import { Container, Image } from 'semantic-ui-react';
import banner from '../imgs/two_heads_background.jpg'

//<Image src={banner}/>
const msg = "Two heads is a lifestyle clothing brand with exclusive limited edition designs. With the intention that our clients feel unique knowing that few people have the same clothes as them. We are a clothing brand that offers a concept of designs focused mainly on Japanese oriental culture. We want to encourage people to be unique, trying not to follow the normal tastes that the crowd follows."
const AboutMe = React.forwardRef((props, ref) =>{
    return(
        <div ref={ref} id="Background" >
            <h1>ABOUT</h1>
            <p>{msg}</p>
            <div id="ImageImpostor"/>
        </div>
    )    
});

export default AboutMe;