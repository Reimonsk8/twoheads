import React from 'react';
import './HamburgerMenu.css'
import mainlogo from "../imgs/Logo Two Heads (Blanco).png" 
import { Segment, Image } from 'semantic-ui-react';

export default class HamburgerMenu extends React.Component{
 constructor(props) {
    super(props);
  }
  
  setOption = (value) =>{
    this.props.menuOption(value)
  }

  testAlert =(values)=>{
    alert(values," not implemented yet")
  }

  render(){
    return(
      <Segment id="menubar" >
        <Image id="mainlogo" centered src={mainlogo}></Image>
        <ul>
          <li className="hvr-underline-from-center" onClick={() => this.setOption("Home")}>Home</li>
          <li className="hvr-underline-from-center" onClick={() => this.setOption("Shop")}>Shop</li>
          <li className="hvr-underline-from-center" onClick={() => this.setOption("About")}>About</li>
          <li className="hvr-underline-from-center" onClick={() => this.setOption("Contact Us")}>Contact Us</li>
        </ul>
      </Segment>

    )
  }
}