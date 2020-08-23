import React from 'react'
import './ShopItem.css'
import {Image, Header} from 'semantic-ui-react'

const Shopitem = ({name, img, imgback, price}) =>{

    let imgchange
    if (imgback != null){
        imgchange = <Image id="backside" src={imgback} size='medium' centered ></Image>;
    }else{
        imgchange = <Image id="backside" src={img} size='medium' centered ></Image>;
    }

    return(
        <div className="hvr-shutter-out-vertical">
            <Image id="frontside" src={img} size='medium' centered ></Image>
            {imgchange}
            <p className="text" >{name}</p>
            <Header className="text" size="small">{price}</Header>
        </div>
    )
}

 export default Shopitem