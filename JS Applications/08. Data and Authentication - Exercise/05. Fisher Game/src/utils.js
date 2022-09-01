const getInputValues = (parent) => [...parent.querySelectorAll('input')];
const isEmptyField = (parent) => getInputValues(parent).some(x => x.value == '');

const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));

export {getInputValues, isEmptyField, getUserData}