import React from 'react'
import Slider from 'components/Slider'
import AdRow from './AdRow'
import IconRow from './IconRow'
import './HomeView.scss'

export default class HomeView extends React.Component {
  render () {
    return (
      <div>
        <Slider />
        <AdRow />
        <IconRow />
      </div>
    )
  }
}

//export default HomeView
