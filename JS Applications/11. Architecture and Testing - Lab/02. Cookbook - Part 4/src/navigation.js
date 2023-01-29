const nav = document.querySelector('nav');

function setupNavigation() {
    nav.addEventListener('click', (ev) => {
        if (ev.target.tagName == 'A') {
            const handler = links[ev.target.id];
            if (handler) {
                ev.preventDefault();
                handler();
            }
        }
    });
}

function setActiveNav(targetId) {
    [...nav.querySelectorAll('a')]
        .forEach(a => a.id == targetId
            ? a.classList.add('active')
            : a.classList.remove('active'));
}

function setUserNav() {
    if (sessionStorage.getItem('authToken') != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

export { setupNavigation, setActiveNav, setUserNav };