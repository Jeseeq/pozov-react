import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Slider from '../../../components/Slider'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <Slider />
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
  </div>
)

export default HomeView
