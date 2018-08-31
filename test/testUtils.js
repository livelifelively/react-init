import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducers from '../src/reducers';

/**
 * Create a testing store with imported reducers, middlewares and initial state
 * @globals: rootReducers
 * @param initialState
 * @returns {*}
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducers, initialState);
};

/**
 * @function findByDataTestAttr - find elements by their data-test value
 * @param {ShallowWrapper} wrapper
 * @param {string}  attr
 * @returns {ShallowWraper}
 */
export const findByDataTestAttribute = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
};

/**
 * @function checkProps - check if the component propTypes are same as passed properties
 * @param {ShallowWraper} component
 * @param {object} confirmingProps
 */
export const checkProps = (component, confirmingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
