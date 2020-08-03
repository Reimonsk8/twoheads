import React from 'react';
import './HamburgerMenu.css'

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
      <nav id="hamburger" role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        
        <span></span>
        <span></span> 
        <span></span>
        
        <ul id="menu">
          <a><li onClick={() => this.setOption("Home")}>Home</li></a>
          <a><li onClick={() => this.setOption("Shop")}>Shop</li></a>
          <a><li onClick={() => this.setOption("About")}>About</li></a>
          <a><li onClick={() => this.setOption("Contact Us")}>Contact Us</li></a>
        </ul>
      </div>
    </nav>
    )
  }
}