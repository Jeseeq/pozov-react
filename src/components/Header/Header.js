import React from 'react'
import {Link, IndexLink} from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import classes from './Header.scss'

export default class Header extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Voting App</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer active={false} to={{pathname: '/'}}>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={2} title='Browse' id='basic-nav-dropdown'>
              <MenuItem eventKey={3.1}>Users</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2}>Polls</MenuItem>
            </NavDropdown>
            <LinkContainer to={{pathname: '/'}}>
              <NavItem eventKey={4}><i className='fa fa-user' />Hello
              </NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname: '/'}}>
              <NavItem eventKey={5}>
                <i className='fa fa-plus' /> New poll
              </NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname: '/'}}>
              <NavItem eventKey={6}>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname: '/'}}>
              <NavItem eventKey={7}>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
