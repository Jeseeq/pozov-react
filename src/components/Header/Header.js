import React from 'react'
import {connect} from 'react-redux'
import {Link, IndexLink} from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from 'routes/Auth/modules/auth'
import './Header.scss'
const BootstrapHeader = Navbar.Header
const BootstrapToggle = Navbar.Toggle
const BootstrapBrand = Navbar.Brand
const BootstrapCollapse = Navbar.Collapse

class Header extends React.Component {
  handleLogout (e) {
    e.preventDefault()
    this.props.logout()
  }
  render () {
    let {user} = this.props
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
            {!user
           ? <LinkContainer to={{pathname: '/signup'}}>
             <NavItem eventKey={1} href='#'>Реєстрація</NavItem>
           </LinkContainer>
            : null}
            {!user
            ? <LinkContainer to={{pathname: '/login'}}>
              <NavItem eventKey={2} href='#'>Вхід</NavItem>
            </LinkContainer>
            : null}
            {user
            ? <NavDropdown eventKey={3} title={user.username} id='basic-nav-dropdown'>
              <MenuItem eventKey={3.1}>Редагувати профіль</MenuItem>
              <MenuItem eventKey={3.2}>Змінити аватар</MenuItem>
              <MenuItem eventKey={3.3}>Змінити пароль</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} onClick={this.handleLogout.bind(this)} >Вихід</MenuItem>
            </NavDropdown>
            : null}
          </Nav>
        </BootstrapCollapse>
      </Navbar>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    status: state.user.status
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
