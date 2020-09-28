import React from 'react'
import './Carrousel.css'
//import logo from '../imgs/Two Heads Logo Vertical (Blanco).png' <img id="logo" alt="" src={logo} />
import img1 from '../imgs/s1.jpeg'
import img2 from '../imgs/s2.jpeg'
import img3 from '../imgs/s3.jpeg'
import img4 from '../imgs/s4.jpeg'
import img5 from '../imgs/img7.jpg'
import img6 from '../imgs/img8.jpg'
import img7 from '../imgs/img9.JPG'
import img8 from '../imgs/img3.jpg'
import img9 from '../imgs/img4.jpg'


const Carrousel = React.forwardRef((props, ref) => {

  const IMG_SHOW  = [img1,img3,img2,img4];
  var content = [];
  for (var i = 1; i <= IMG_SHOW.length; i++) {
    if(i == 1){
      content.push(
        <div className="slide-image active" data-item={i}>
        <img alt="" src={IMG_SHOW[i-1]} />
        </div>
      );
    }else{
      content.push(
        <div className="slide-image" data-item={i}>
        <img alt="" src={IMG_SHOW[i-1]}/>
        </div>
      );
    }
  } 

  return(
    <div ref={ref} className="container">
      <div className="wrapper">
        <div className="slider">
          <div className="vfill">
            {content}
          </div>
          <div className="action-btns">
              <button className="btn prev-btn">&lsaquo;</button>
              <button className="btn next-btn">&rsaquo;</button>
          </div>
        </div>
      </div>
    </div>
  )
});

export default Carrousel;