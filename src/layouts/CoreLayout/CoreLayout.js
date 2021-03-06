import React from 'react'
import Header from '../../components/Header/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export default class CoreLayout extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container'>
            {this.props.children}
        </div>
      </div>
    )
  }
}
CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}
