import { showView } from '../app.js';
import { getUserData } from './authentication.js';

//---- get elements ------------------------------------------------------------
const nav = document.querySelector('nav');
const user = document.getElementById('user');
const guest = document.getElementById('guest');

//---- attach event listeners --------------------------------------------------
nav.addEventListener('click', onNavigate);

//---- creating associations between navbar links and views --------------------
const links = {
    'homeLink': 'home',
    'registerLink': 'register',
    'loginLink': 'login',
    'catalogLink': 'catalog',
    'createLink': 'create',
};

//---- page change function when navigating from navbar ------------------------
function onNavigate(event) {
    const name = links[event.target.id];

    if (name) {
        event.preventDefault();
        showView(name);
    }
}

//---- change the visibility of the navigation links depend of user status -----
function setUserNav() {
    const userData = getUserData();

    if (userData != null) {
        user.style.display = 'inline-block';
        guest.style.display = 'none';
    } else {
        user.style.display = 'none';
        guest.style.display = 'inline-block';
    }
}

//---- change the CSS class of the navigation links depend selected link -------
function setActiveNav(targetId) {
    [...nav.querySelectorAll('a')].forEach(a => a.id == targetId ? a.classList.add('active') : a.classList.remove('active'));
}

export { setUserNav, setActiveNav }