import React from 'react'
import './AboutMe.css'
import { Container, Image } from 'semantic-ui-react';
import banner from '../imgs/About.svg'

//<Image src={banner}/>      <div id="ImageImpostor"/>
const msg1 = "Somos una marca de ropa independiente con diseños exclusivos de edición limitada, con sede en Ensenada, Baja California, México. "
const msg2 = "En Two Heads Clothing ofrecemos un concepto urbano de diseños centrados principalmente en la cultura oriental japonesa. "
const msg3 = "Queremos que te sientas único sabiendo que pocas personas tendrán la misma ropa que tú, garantizando calidad y originalidad en tu guardarropa."
const AboutMe = React.forwardRef((props, ref) =>{
    return(
        <div ref={ref} id="Background">
            <div id="divcontainer"> 
                <div id="divleft">
                    <Image id="banner" src={banner} size="tiny" centered></Image>
                </div>
                <div id="divright">
                    <h1>NUESTRA HISTORIA</h1>
                    <p>{msg1}</p>
                    <p>{msg2}</p>
                    <p>{msg3}</p>
                </div>
            </div>
        </div>
    )    
});

export default AboutMe;