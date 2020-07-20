import React from 'react'
import {Image} from 'semantic-ui-react'

const Shopitem = ({name, img}) =>{
    return(
        <div>
            <Image src={img} size='medium' centered ></Image>
            <p>{name}</p>
        </div>
    )
}

 export default Shopitem