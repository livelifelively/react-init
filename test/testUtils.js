import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducers from '../src/reducers';
import { middlewares } from "../src/store";

/**
 * Create a testing store with imported reducers, middlewares and initial state
 * @globals: rootReducers, middlewares
 * @param initialState
 * @returns {*}
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducers, initialState);
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
