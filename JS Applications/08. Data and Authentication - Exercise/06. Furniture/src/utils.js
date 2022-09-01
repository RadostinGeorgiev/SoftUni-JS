const getInputValues = (form) => [...form.querySelectorAll('input')];
const isEmptyField = (form) => getInputValues(form).some(x => x.value == '');
const clearFields = (form) => getInputValues(form).forEach(x => x.value = '');

const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));
const clearUserData = () => sessionStorage.removeItem('userData');

export {getInputValues, isEmptyField, clearFields, getUserData, clearUserData}