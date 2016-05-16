import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import './DocumentLayout.scss'
export default class DocumentLayout extends React.Component {
  render () {
    const {preview, explanation, main, title} = this.props

    return (
      <div>
        {title}
        <Tabs defaultActiveKey={1} id='tab'>
          <Tab eventKey={1} title='Створення документу'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-xs-12'>
                {main}
              </div>
              <div className='col-lg-6 col-md-6 col-xs-12'>
                {preview}
              </div>
            </div>
          </Tab>
          <Tab eventKey={2} title='Опис'>
            {explanation}
          </Tab>
        </Tabs>
      </div>
    )
  }
}
