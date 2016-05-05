import React from 'react'
import Slider from '../../../components/Slider'
import AdRow from './AdRow'
import IconRow from './IconRow'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <Slider />
    <AdRow />
    <IconRow />
  </div>
)

export default HomeView
