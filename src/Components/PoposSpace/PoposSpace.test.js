import React from 'react'
import { shallow } from 'enzyme'
import PoposSpace from './PoposSpace'


test('render component with errors', () => {
  const wrapper = shallow(<PoposSpace />)
  const componentPoposSpace = wrapper.find("[data-test='component-poposSpace']")
  expect(componentPoposSpace.length).toBe(1)
})