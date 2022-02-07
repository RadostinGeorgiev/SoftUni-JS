function toggle() {
    let button = document.querySelector('.button');
    button.textContent = button.textContent === 'More' ? 'Less' : 'More';

    let text = document.querySelector('#extra');
    text.style.display = button.textContent === 'More' ? 'none' : 'block';
}