function addItem() {
    const text = document.querySelector('#newItemText');
    const value = document.querySelector('#newItemValue');

    let optElement = document.createElement('option');
    optElement.textContent = text.value;
    optElement.value = value.value;

    document.querySelector('#menu').appendChild(optElement);
    text.value = '';
    value.value = '';
}