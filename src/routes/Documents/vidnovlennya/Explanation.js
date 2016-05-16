import React from 'react'
import file from './explanation.md'

export default class Page extends React.Component {
  render () {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: file}} />
      </div>
      )
  }
}
