import React from 'react'
import './Carrousel.css'
import logo from '../imgs/Two Heads Logo Vertical (Blanco).png'
import img1 from '../imgs/img1.jpg'
import img2 from '../imgs/img2.jpg'
import img3 from '../imgs/img5.jpg'
import img4 from '../imgs/img6.jpg'
import img5 from '../imgs/img7.jpg'
import img6 from '../imgs/img8.jpg'
import img7 from '../imgs/img9.JPG'
import img8 from '../imgs/img3.jpg'
import img9 from '../imgs/img4.jpg'

const Carrousel = React.forwardRef((props, ref) => {
  return(
    <div ref={ref} className="container">
      <div className="wrapper">
        <img id="logo" alt="" src={logo} />
        <div className="slider">
          <div className="slide-image active" data-item="1">
            <img alt="" src={img1} />
          </div>
          <div className="slide-image" data-item="2">
              <img alt="" src={img2} />
          </div>
          <div className="slide-image" data-item="3">
              <img alt="" src={img3} />
          </div>
          <div className="slide-image" data-item="4">
              <img alt="" src={img4} />
          </div>
          <div className="slide-image" data-item="5">
              <img alt="" src={img5} />
          </div>
          <div className="slide-image" data-item="6">
              <img alt="" src={img6} />
          </div>
          <div className="slide-image" data-item="7">
              <img alt="" src={img7} />
          </div>
          <div className="slide-image" data-item="8">
              <img alt="" src={img8} />
          </div>
          <div className="slide-image" data-item="9">
              <img alt="" src={img9} />
          </div>
        </div>

        <div className="action-btns">
              <button className="btn prev-btn">&lsaquo;</button>
              <button className="btn next-btn">&rsaquo;</button>
        </div>
      </div>
    </div>
  )
});

export default Carrousel;