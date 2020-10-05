import React from 'react'
import './ShopItem.css'
import {Image, Header} from 'semantic-ui-react'

const Shopitem = ({name, img, imgback, price}) =>{

    let imgchange
    if (imgback != null){
        imgchange = <img id="backside" src={imgback}/>;
    }else{
        imgchange = <img id="backside" src={img} />;
    }

    return(
        <div className="hvr-shutter-out-vertical">
            <div className="itemcontainer">
                <img id="frontside" src={img}/>
                {imgchange}
                <p className="text1">{name}</p>
                <p className="text2" >{price}</p>
            </div>
        </div>
    )
}

 export default Shopitem