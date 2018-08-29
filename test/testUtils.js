/**
 * @function findByDataTestAttr - find elements by their data-test value
 * @param {ShallowWrapper} wrapper
 * @param {string}  attr
 * @returns {ShallowWraper}
 */
export const findByDataTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
};

/**
 *
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
