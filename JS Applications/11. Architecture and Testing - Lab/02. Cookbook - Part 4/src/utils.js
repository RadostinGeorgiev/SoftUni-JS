const getInputValues = (form) => [...form.querySelectorAll('input')];
const getInputAreas = (form) => [...form.querySelectorAll('textarea')];
const isEmptyField = (form) => getInputValues(form).some(x => x.value == '');

export { isEmptyField }