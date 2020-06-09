import React from 'react';
import { shallow } from 'enzyme'
import Title from './Title';


test('render without error', () => {
  const wrapper = shallow(<Title />)
  const componentTitle = wrapper.find("[data-test='component-title']")
  expect(componentTitle.length).toBe(1)
})


test('render the title', () => {
  const wrapper = shallow(<Title />)
  expect(wrapper.find('h1').text()).toContain("LPOPOS")
})


test('render the subtitle', () => {
  const wrapper = shallow(<Title />)
  expect(wrapper.find('h2').text()).toContain("London Privately Owned Public Open Spaces")
})

