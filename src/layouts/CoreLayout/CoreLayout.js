import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export default class CoreLayout extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container text-center'>
          <div className='mainContainer'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}
