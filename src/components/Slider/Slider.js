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
export default class Slider extends React.Component {
  render () {
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
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    }
    return (
      <Slick className='modern-slider' {...settings}>
        <div className='item'>
          <div className='imgFill'>
            <img src={a} alt='' />
            <div className='info'>
              <div>
                <h3 className='center-block'>Конструктор документів</h3>
                <h4 className='center-block'>Створення документів ще ніколи не було таким простим</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='imgFill'>
            <img src={b} alt='' />
            <div className='info'>
              <div>
                <h3 className='center-block'>Простота</h3>
                <h4 className='center-block'>Щоб отримати потрібний документ просто
                дайте відповідь на питання! І все!</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='imgFill'>
            <img src={c} alt='' />
            <div className='info'>
              <div>
                <h3 className='center-block'>Багато задоволених користувачів</h3>
                <h4 className='center-block'>Ви можете ознайомитися з документом перед покупкою</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='imgFill'>
            <img src={d} alt='' />
            <div className='info'>
              <div>
                <h3 className='center-block'>Ще щось</h3>
                <h4 className='center-block'>Donec id ornare dui. Aenean tristique condimentum elit, quis
                blandit nisl varius sit amet. Sed eleifend felis quis massa viverra</h4>
              </div>
            </div>
          </div>
        </div>
      </Slick>
    )
  }
}
