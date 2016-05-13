import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {push} from 'react-router-redux'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {logout} from 'modules/user'
import './Header.scss'

const BootstrapHeader = Navbar.Header
const BootstrapToggle = Navbar.Toggle
const BootstrapBrand = Navbar.Brand
const BootstrapCollapse = Navbar.Collapse

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
    this.renderTitle = this.renderTitle.bind(this)
  }
  renderTitle (user) {
    return (
      <span>
        <img className='header-profile-img' src={user.avatar} alt="Placehold.it" />
        {user.username}
      </span>
    )
  }
  handleLogout (e) {
    e.preventDefault()
    this.props.logout()
  }
  render () {
    const {user} = this.props
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
            ? <NavDropdown eventKey={3} title={this.renderTitle(user)} id='basic-nav-dropdown'>
              <LinkContainer to={{pathname: '/settings/profile'}}>
                <MenuItem eventKey={3.1}>Редагувати профіль</MenuItem>
              </LinkContainer>
              <LinkContainer to={{pathname: '/settings/avatar'}}>
                <MenuItem eventKey={3.2}>Змінити аватар</MenuItem>
              </LinkContainer>
              <LinkContainer to={{pathname: '/settings/password'}}>
                <MenuItem eventKey={3.3}>Змінити пароль</MenuItem>
              </LinkContainer>
              <MenuItem divider />
              <MenuItem eventKey={3.3} onClick={this.handleLogout} >Вихід</MenuItem>
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
    logout: () => {
      dispatch(logout()).then((response) => {
        if (!response.error) {
          dispatch(push('/'))
        }
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
