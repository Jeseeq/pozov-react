import React from 'react'
import Slick from 'react-slick'
import a from './assets/2.jpg'
import b from './assets/5.jpg'
import c from './assets/6.jpg'
import d from './assets/7.jpg'

import './Slider.scss'

class PrevArrow extends React.Component {
  render () {
    return <button {...this.props}></button>
  }
}
class NextArrow extends React.Component {
  render () {
    return <button {...this.props}></button>
  }
}
export const Slider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
   // fade:true,
    draggable: false,
    prevArrow: PrevArrow,
    nextArrow: NextArrow
  }
  return (
    <Slick className='modernSlider' {...settings}>
      <div className='item'>
        <div className='imgFill'>
          <img src={a} alt='' />
          <div className='info'>
            <div>
              <h3>Full Width Slider With Layers</h3>
              <h5>You can easily add image, html formatted texts and video layers over each slide
              and each layer accepts unique animation.</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='imgFill'>
          <img src={b} alt='' />
          <div className='info'>
            <div>
              <h3>Fully responsive Scales with its container</h3>
              <h5>Donec id ornare dui. Aenean tristique condimentum elit,
              quis blandit nisl varius sit amet. Sed eleifend felis quis massa viverra</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='imgFill'>
          <img src={c} alt='' />
          <div className='info'>
            <div>
              <h3>Awesome Transtions With CSS3</h3>
              <h5>Donec id ornare dui. Aenean tristique condimentum elit,
              quis blandit nisl varius sit amet. Sed eleifend felis quis massa viverra</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='imgFill'>
          <img src={d} alt='' />
          <div className='info'>
            <div>
              <h3>Separate settings per breakpoint</h3>
              <h5>Donec id ornare dui. Aenean tristique condimentum elit, quis
              blandit nisl varius sit amet. Sed eleifend felis quis massa viverra</h5>
            </div>
          </div>
        </div>
      </div>
    </Slick>
  )
}
export default Slider
