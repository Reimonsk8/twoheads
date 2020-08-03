import React from 'react';
import './HamburgerMenu.css'
import mainlogo from "../imgs/Logo Two Heads (Blanco).png" 
import { Container, Image } from 'semantic-ui-react';

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
      <Container id="menubar">
        <Image id="mainlogo" centerd="true" src={mainlogo}></Image>
        <p id="stretch"></p>
        <nav>
            <ul>
              <li class="nav-item" onClick={() => this.setOption("Home")}>Home</li>
              <li class="nav-item" onClick={() => this.setOption("Shop")}>Shop</li>
              <li class="nav-item" onClick={() => this.setOption("About")}>About</li>
              <li class="nav-item" onClick={() => this.setOption("Contact Us")}>Contact Us</li>
            </ul>
        </nav>
      </Container>

    )
  }
}