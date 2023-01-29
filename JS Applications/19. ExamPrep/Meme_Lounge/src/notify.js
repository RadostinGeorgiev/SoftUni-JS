const element = document.getElementById('errorBox');
const output = element.querySelector('span');

function notify(message) {
    output.textContent = message;
    element.style.display = 'block';

    setTimeout(() => element.style.display = 'none', 3000);
}

export { notify }