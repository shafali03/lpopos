import React from 'react';
import { shallow } from 'enzyme'
import PoposList from './PoposList';


test('render without error', () => {
  const wrapper = shallow(<PoposList />)
  const componentPoposList = wrapper.find("[data-test='component-PoposList']")
  expect(componentPoposList.length).toBe(1)
})
