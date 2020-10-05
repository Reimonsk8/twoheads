import React from 'react'
import './ShopGrid.css'
import {Container, Table} from 'semantic-ui-react'
import ShopItem from './ShopItem.js'
import item1 from '../imgs/IMG_8473_540x.png'
import item2 from '../imgs/1_fb1dd9f6-4c1e-45d9-92d0-40ce72de281c_360x.png'
import item3 from '../imgs/1_ed820af4-d387-4f08-b443-9571a0706dfa_360x.png'
import item4 from '../imgs/1_f116da56-74fd-42d8-a9e5-f1f1dda99fc9_360x.png'
import item5 from '../imgs/1_772d3f0d-a6ae-4956-a889-1a82e217e766_360x.png'
import item6 from '../imgs/1_61ac2f2f-344d-4dc5-8e1d-cd628034c232_360x.png'
import item1front from '../imgs/TieDye Frente.png'
import item1back from '../imgs/TieDye Espalda.png'
import item2front from '../imgs/CorazonTriste Frente.png'
import item2back from '../imgs/CorazonTriste Espalda.png'

/*可用
        <Table id="TableGrid" centered="true">
          <Table.Body>
            <Table.Row>
              <Table.Cell><ShopItem name="Oatmeal Triblend Tigers T-Shirt" img={item1} price={'$ 450.00 MXN'}/></Table.Cell>
              <Table.Cell><ShopItem name="Black Heather Okame T-Shirt" img={item2} price={'$ 400.00 MXN '}/></Table.Cell>
              <Table.Cell><ShopItem name="Skulls Marron T-Shirt" img={item3} price={'$ 400.00 MXN'}/></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><ShopItem name="Black Strapback Hat" img={item4} price={'$ 400.00 MXN'}/></Table.Cell>
              <Table.Cell><ShopItem name="Minimal Gray Hoodie" img={item5}price={'$ 600.00 MXN'}/></Table.Cell>
              <Table.Cell><ShopItem name="Black Beanie" img={item6} price={'$ 400.00 MXN'}/></Table.Cell>
            </Table.Row>
          </Table.Body>

          <ShopItem name="Oatmeal Triblend Tigers T-Shirt" img={item1} price={'$ 450.00 MXN'}/>
          <ShopItem name="Black Heather Okame T-Shirt" img={item2} price={'$ 400.00 MXN '}/>
          <ShopItem name="Skulls Marron T-Shirt" img={item3} price={'$ 400.00 MXN'}/>
          <ShopItem name="Black Strapback Hat" img={item4} price={'$ 400.00 MXN'}/>
          <ShopItem name="Minimal Gray Hoodie" img={item5}price={'$ 600.00 MXN'}/>
          <ShopItem name="Black Beanie" img={item6} price={'$ 400.00 MXN'}/>
*/

const ShopGrid = React.forwardRef((props, ref) => {
    return(
      <div ref={ref} id="ShopBackground">
        <h1>Catálogo de Productos</h1>
        <div id="TableGrid">
          <ShopItem name="TyeDye T-Shirt" img={item1front} imgback={item1back} price={'$ 450.00 MXN'}/>
          <ShopItem name="Sad Hearth T-Shirt" img={item2front} imgback={item2back} price={'$ 400.00 MXN '}/>
        </div>
      </div>
    )
  }
);

export default ShopGrid;