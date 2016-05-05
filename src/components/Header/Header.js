import React from 'react'
import {Link, IndexLink} from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './Header.scss'
const BootstrapHeader = Navbar.Header
const BootstrapToggle = Navbar.Toggle
const BootstrapBrand = Navbar.Brand
const BootstrapCollapse = Navbar.Collapse

class Header extends React.Component {
  render () {
    return (
      <Navbar className='header'>
        <BootstrapHeader>
          <BootstrapBrand>
            <Link to='/'>Позов</Link>
          </BootstrapBrand>
          <BootstrapToggle />
        </BootstrapHeader>
        <BootstrapCollapse>
          <Nav>
            <NavItem eventKey={1} href='#'>Підтримка</NavItem>
            <NavItem eventKey={2} href='#'>Створити Документ</NavItem>
          </Nav>
          <Nav pullRight>
            <LinkContainer to={{pathname: '/signup'}}>
              <NavItem eventKey={1} href='#'>Реєстрація</NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname: '/login'}}>
              <NavItem eventKey={2} href='#'>Вхід</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title='Імя користувача' id='basic-nav-dropdown'>
              <MenuItem eventKey={3.1}>Редагувати профіль</MenuItem>
              <MenuItem eventKey={3.2}>Змінити аватар</MenuItem>
              <MenuItem eventKey={3.3}>Змінити пароль</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Вихід</MenuItem>
            </NavDropdown>
          </Nav>
        </BootstrapCollapse>
      </Navbar>
    )
  }
}
export default Header
