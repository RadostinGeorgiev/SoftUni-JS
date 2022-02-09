function addItem() {
    const input = document.querySelector('#newItemText');
    const items = document.querySelector('#items');

    let liElement = document.createElement('li');
    liElement.textContent = input.value;
    items.appendChild(liElement);

    input.value = '';
}