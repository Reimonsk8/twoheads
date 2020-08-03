import React from 'react'
import './TwoHeadsFooter.css'
import {Segment, Image} from 'semantic-ui-react'
import logoH from '../imgs/Logo Two Heads (Blanco).svg'
import '../fonts/Sangha.ttf'

//segment glitch background
const TwoHeadsFooter = ({name}) => {
    return(
      <Segment id="footer">
        <Image id="mini-logo" src={logoH} size='tiny' floated='left'/>
        <div className="flex-center">
          <a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer">   
            <i className="fa fa-twitter fa-2x icon-3d"/>
          </a>
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
      </Segment>
    )
  }

export default TwoHeadsFooter;