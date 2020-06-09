import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
// import Title from './Components/Title/Title';



test('render without error', () => {
  const wrapper = shallow(<App />)
  const componentApp = wrapper.find("[data-test='component-app']")
  expect(componentApp.length).toBe(1)
})
