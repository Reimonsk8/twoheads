import React from 'react';
import './MenuBar.css'
import mainlogo from "../imgs/Logo Two Heads (Blanco).png" 
import { Segment, Image } from 'semantic-ui-react';

export default class MenuBar extends React.Component{
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
        <Image className="mainlogo" centered src={mainlogo}></Image>
        <ul className="menus">
          <li className="hvr-underline-from-center" onClick={() => this.setOption("Home")}>Inicio </li>
          <li className="hvr-underline-from-center" onClick={() => this.setOption("About")}>Conócenos</li>
          <li className="hvr-underline-from-center" onClick={() => this.setOption("Shop")}>Catálogo</li>
          <li className="hvr-underline-from-center" onClick={() => this.setOption("Contact Us")}>Contáctanos</li>
        </ul>
      </Segment>

    )
  }
}