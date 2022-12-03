const getInputValues = (form) => [...form.querySelectorAll('input')];
const getInputAreas = (form) => [...form.querySelectorAll('textarea')];
const isEmptyField = (form) => getInputValues(form).some(x => x.value.trim() == '');
const getEmptyFields = (form) => getInputValues(form).filter(x => x.value.trim() == '');
const getEmptyRequiredFields = (form, optional) => getInputValues(form).filter(x => x.value.trim() == '' && x.name != optional);
const isEmptyRequiredField = (form, optional) => getEmptyRequiredFields(form, optional).length > 0;

export { isEmptyField, getEmptyFields, getEmptyRequiredFields, isEmptyRequiredField }