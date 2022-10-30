const getInputValues = (form) => [...form.querySelectorAll('input')];
const isEmptyField = (form) => getInputValues(form).some(x => x.value == '');

const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));

export {getInputValues, isEmptyField, getUserData}