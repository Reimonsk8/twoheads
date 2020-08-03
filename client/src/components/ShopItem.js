import React from 'react'
import './ShopItem.css'
import {Image} from 'semantic-ui-react'

const Shopitem = ({name, img}) =>{
    return(
        <div id="item">
            <Image src={img} size='medium' centered ></Image>
            <p>{name}</p>
        </div>
    )
}

 export default Shopitem