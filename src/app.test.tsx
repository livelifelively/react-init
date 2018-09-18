import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

test('renders without error', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});
