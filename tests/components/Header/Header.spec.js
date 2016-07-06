import React from 'react'
import { Header } from 'components/Header/Header'
import { IndexLink } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })

  describe('Navigation links...', () => {
    it('Should render an IndexLink to Home route', () => {
      const route = shallow(<IndexLink to='/'>Позов</IndexLink>)
      expect(_wrapper.contains(route)).to.equal.true
    })

    it('Should render an LinkContainer to documents route)', () => {
      const route2 = shallow(<LinkContainer to={{pathname: '/documents'}} />)
      expect(_wrapper.contains(route2)).to.equal.true
    })
  })
})
