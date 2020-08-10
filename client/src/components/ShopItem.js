import React from 'react'
import './ShopItem.css'
import {Image, Header} from 'semantic-ui-react'

const Shopitem = ({name, img, price}) =>{
    return(
        <div className="hvr-shutter-out-vertical">
            <Image src={img} size='medium' centered ></Image>
            <p>{name}</p>
            <Header textAlign="centered" size="small">{price}</Header>
        </div>
    )
}

 export default Shopitem