import React from 'react';
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import App from './App';


test('render without error', () => {
  const wrapper = shallow(<App />)
  const componentApp = wrapper.find("[data-test='component-app']")
  expect(componentApp.length).toBe(1)
})
