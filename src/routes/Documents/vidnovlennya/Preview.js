import React from 'react'
import ScrollArea from 'react-scrollbar'
import file from './explanation.md'
export default class Page extends React.Component {
  handleChange = (e) => {
    return false
  }
  render () {
    return (
      <div>
        <ScrollArea
          onClick={this.handleChange}
          onContextMenu={this.handleChange}
          onSelect={this.handleChange}
          speed={0.8}
          className='area'
          contentClassName='content'
          horizontal={false}
          smoothScrolling={true}
         >
          <div dangerouslySetInnerHTML={{__html: file}} />
        </ScrollArea>
      </div>
      )
  }
}
