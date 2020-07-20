import React from 'react';
import './App.css'
import TwoHeadsHeader from './components/TwoHeadsHeader.js'
import {Image} from 'semantic-ui-react'
import logoV from './imgs/Two Heads Logo Vertical (Blanco).svg'
import TwoHeadsFooter from './components/TwoHeadsFooter';
import ShopGrid from './components/ShopGrid.js'

//const introduction = "We are a clothing brand that offers a concept of designs focused mainly on Japanese oriental culture. We want to encourage people to be unique, trying not to follow the normal tastes that the crowd follows."
const introduction = "WELCOME"

//<Image className="Sandwich" src={logoV} size='medium' centered></Image>
function App() {
  return (
    <div className="App">
        <TwoHeadsHeader/>
        <ShopGrid/>
        <div className="BrandRegistration">
          <p>© 2020, Two Heads Clothing.</p>
        </div>
        <TwoHeadsFooter/>
    </div>
  );
}

export default App;
