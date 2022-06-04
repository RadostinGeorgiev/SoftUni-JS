function toggle() {
    const extra = document.querySelector('#extra');
    const button = document.querySelector('.button');

    extra.style.display = button.textContent == 'More' ? 'block' : 'none';
    button.textContent = button.textContent == 'More' ? 'Less' : 'More';
}