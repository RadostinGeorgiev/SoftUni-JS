function addItem() {
    const input = document.querySelector('#newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    let a = document.createElement('a');
    a.textContent = '[Delete]';
    a.href = '#';
    a.addEventListener('click', function () {
        a.parentNode.remove()
    });

    liElement.appendChild(a);

    document.querySelector('#items').appendChild(liElement);

    input.value = '';
}