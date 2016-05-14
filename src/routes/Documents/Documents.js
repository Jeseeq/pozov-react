import React from 'react'
import {Accordion, Panel, ListGroup, ListGroupItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
export default class ChangeAvatar extends React.Component {
  render () {
    return (
      <div>
        <div className='page-header'><h1>Стоворити документ</h1></div>
        <div className='row'>
          <div className='col-xs-12 col-lg-4'>
            <Panel collapsible header='Трудові позови'>
              <ListGroup fill>
                <LinkContainer to={{pathname: '/documents/vidnovlennya-na-roboti'}}>
                  <ListGroupItem>Відновлення на роботі</ListGroupItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/documents/vidnovlennya-na-roboti'}}>
                  <ListGroupItem>Ще один документ</ListGroupItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/documents/vidnovlennya-na-roboti'}}>
                  <ListGroupItem>Документ</ListGroupItem>
                </LinkContainer>
              </ListGroup>
            </Panel>
          </div>
          <div className='col-xs-12 col-lg-4'>
            <Panel collapsible header='Трудові позови'>
              <ListGroup fill>
                <LinkContainer to={{pathname: '/documents/vidnovlennya-na-roboti'}}>
                  <ListGroupItem>Відновлення на роботі</ListGroupItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/documents/vidnovlennya-na-roboti'}}>
                  <ListGroupItem>Ще один документ</ListGroupItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/documents/vidnovlennya-na-roboti'}}>
                  <ListGroupItem>Документ</ListGroupItem>
                </LinkContainer>
              </ListGroup>
            </Panel>
          </div>
          <div className='col-xs-12 col-lg-4'>
            <Panel collapsible header='Трудові позови'>
              <ListGroup fill>
                <LinkContainer to={{pathname: '/documents/vidnovlennya-na-roboti'}}>
                  <ListGroupItem>Відновлення на роботі</ListGroupItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/documents/vidnovlennya-na-roboti'}}>
                  <ListGroupItem>Ще один документ</ListGroupItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/documents/vidnovlennya-na-roboti'}}>
                  <ListGroupItem>Документ</ListGroupItem>
                </LinkContainer>
              </ListGroup>
            </Panel>
          </div>
        </div>
      </div>
    )
  }
}
