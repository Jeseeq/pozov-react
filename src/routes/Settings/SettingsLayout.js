import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default class SettingsLayout extends React.Component {
  render () {
    return (
      <div>
        <div className='page-header'>
          <h1>Налаштування</h1>
        </div>
        <div className='row'>
          <div className='col-sm-3 col-md-3'>
            <Nav bsStyle='pills' stacked activeKey={1}>
              <LinkContainer to={{pathname: '/settings/profile'}}>
                <NavItem eventKey={1} href='/home'>Редагувати профіль</NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname: '/settings/avatar'}}>
                <NavItem eventKey={2} title='Item'>Змінити аватар</NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname: '/settings/password'}}>
                <NavItem eventKey={2} title='Item'>Змінити пароль</NavItem>
              </LinkContainer>
              <NavItem eventKey={2} title='Item'>Придумати</NavItem>
            </Nav>
          </div>
          <div className='col-sm-9 col-md-8'>
              {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
SettingsLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}
