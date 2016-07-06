import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import {Slider} from 'components/Slider/Slider'
import { shallow } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = shallow(<HomeView />)
  })

  // it('Renders Slider', () => {
  //   expect(_component.contains(<Slider />)).to.equal.true
    // expect(Slider).to.exist
    // expect(welcome.text()).to.match(/Welcome!/)
  // })
})
