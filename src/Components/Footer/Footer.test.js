import React from 'react'
import Footer from './Footer'
import { shallow } from 'enzyme'

test('render without error', () => {
  const wrapper = shallow(<Footer />)
  const componentFooter = wrapper.find("[data-test='component-footer']")
  expect(componentFooter.length).toBe(1)
})
