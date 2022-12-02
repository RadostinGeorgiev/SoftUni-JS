const getInputValues = (form) => [...form.querySelectorAll('input')];
const getInputAreas = (form) => [...form.querySelectorAll('textarea')];
const isEmptyField = (form) => getInputValues(form).some(x => x.value == '');

const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));
const clearUserData = () => sessionStorage.removeItem('userData');

/**
 * --- function for creation DOM elements ---------------------------------------
 * @param {string} type
 * @param {string} value
 * @param {element} parent
 * @param {string} attr
 * @param {string} attrValue
 * @param {boolean} disabled
 * @returns HTML element
 */
 function createElement(type, value, parent, attr, attrValue, disabled) {
    const element = document.createElement(type);

    if (type == 'input') {
        element.setAttribute('type', 'text');
    }
    if (value) {
        element.textContent = value;
    }
    if (attr) {
        element.setAttribute(attr, attrValue);
    }
    if (parent) {
        parent.appendChild(element);
    }
    if (disabled) {
        element.disabled = disabled;
    }

    return element;
}

export { isEmptyField, getUserData, clearUserData, createElement }