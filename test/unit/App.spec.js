import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/App'

describe('app', () => {
  it('renders hello', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('.hello').text()).toContain('hello world')
  })
})