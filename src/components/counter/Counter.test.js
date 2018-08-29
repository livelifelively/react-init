import React from 'react';
import {shallow} from 'enzyme';

import {findByDataTestAttr, checkProps} from "../../../test/testUtils";
import Counter from './Counter';

/**
 * Factory function to return ShallowWrapper of component
 * @param {object} props
 * @param {object} state
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<Counter {...props} />);
  if(state) {
    wrapper.setState(state)
  }
  return wrapper;
};

describe('Counter Component', () => {

  describe('render', () => {

    test('successfully render component', () => {
      const wrapper = setup();
      const counterComponent = findByDataTestAttr(wrapper, 'component-counter');
      expect(counterComponent.length).toBe(1);
    });

    test('successfully render counter display', () => {
      const wrapper = setup();
      const counterDisplay = findByDataTestAttr(wrapper, 'counter-display');
      expect(counterDisplay.length).toBe(1);
    });

    test('successfully render increase counter button', () => {
      const wrapper = setup();
      const counterIncrementButton = findByDataTestAttr(wrapper, 'counter-increment-button');
      expect(counterIncrementButton.length).toBe(1);
    });

    test('successfully render decrease counter button', () => {
      const wrapper = setup();
      const counterDecrementButton = findByDataTestAttr(wrapper, 'counter-decrement-button');
      expect(counterDecrementButton.length).toBe(1);
    });

    test('successfully displays 0 on counter display', () => {
      const wrapper = setup();
      const counterDisplay = findByDataTestAttr(wrapper, 'counter-display');
      expect(counterDisplay.text()).toContain(0);
    });

    test('successfully displays error message', () => {
      const wrapper = setup({}, {counter: 0, error: 'error here'});
      const errorDisplay = findByDataTestAttr(wrapper, 'counter-error');
      expect(errorDisplay.text().length).not.toBe(0);
    });
  });

  describe('functionality', () => {
    test('counter value increases on clicking increment button', () => {
      const counter = 8;
      const wrapper = setup({}, {counter});
      const incrementButton = findByDataTestAttr(wrapper, 'counter-increment-button');
      incrementButton.simulate('click');
      wrapper.update();

      const counterDisplay = findByDataTestAttr(wrapper, 'counter-display');
      expect(counterDisplay.text()).toContain(counter+1);
    });

    test('counter value decreases on clicking decrement button', () => {
      const counter = 8;
      const wrapper = setup({}, {counter});
      const decrementButton = findByDataTestAttr(wrapper, 'counter-decrement-button');
      decrementButton.simulate('click');
      wrapper.update();

      const counterDisplay = findByDataTestAttr(wrapper, 'counter-display');
      expect(counterDisplay.text()).toContain(counter-1);
    });

    test('counter does not go below 0', () => {
      const counter = 0;
      const wrapper = setup({}, {counter});
      const decrementButton = findByDataTestAttr(wrapper, 'counter-decrement-button');
      decrementButton.simulate('click');
      wrapper.update();

      const counterDisplay = findByDataTestAttr(wrapper, 'counter-display');
      expect(counterDisplay.text()).toContain(counter);
    });

    test('counter shows error when decrement button clicked at 0', () => {
      const counter = 0;
      const wrapper = setup({}, {counter});
      const decrementButton = findByDataTestAttr(wrapper, 'counter-decrement-button');
      decrementButton.simulate('click');
      wrapper.update();

      const errorDisplay = findByDataTestAttr(wrapper, 'counter-error');
      expect(errorDisplay.text().length).not.toBe(0);
    });

    test('counter error element removed when increment button clicked at 0', () => {
      const counter = 0;
      const error = 'some error here';
      const wrapper = setup({}, {counter, error});
      const incrementButton = findByDataTestAttr(wrapper, 'counter-increment-button');
      incrementButton.simulate('click');
      wrapper.update();
      // wrapper.state()
      const errorDisplay = findByDataTestAttr(wrapper, 'counter-error');
      expect(errorDisplay.length).toBe(0);
    });

    test('counter error in state set as empty string when increment button clicked at 0', () => {
      const counter = 0;
      const error = 'some error here';
      const wrapper = setup({}, {counter, error});
      const incrementButton = findByDataTestAttr(wrapper, 'counter-increment-button');
      incrementButton.simulate('click');
      wrapper.update();

      expect(wrapper.state().error.length).toBe(0);
    });

  });

  describe('propTypes', () => {

  });

});
