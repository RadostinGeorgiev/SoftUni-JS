function addItem() {
    const input = document.querySelector('#newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    let aElement = document.createElement('a');
    aElement.textContent = '[Delete]';
    aElement.href = '#';
    aElement.addEventListener('click', function () {
        aElement.parentNode.remove()
    });

    liElement.appendChild(aElement);

    document.querySelector('#items').appendChild(liElement);

    input.value = '';
}