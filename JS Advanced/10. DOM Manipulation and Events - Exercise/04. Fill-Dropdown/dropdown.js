function addItem() {
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');

    const optionElement = document.createElement('option');
    optionElement.textContent = textInput.value;
    optionElement.value = valueInput.value;
    
    document.getElementById('menu').appendChild(optionElement);
    
    textInput.value ='';
    valueInput.value = '';
}