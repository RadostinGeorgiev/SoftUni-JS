import { logout } from "./requests.js";
import { route } from "./router.js";
import { getUserData } from "./utils.js";

const recipesUrl = '/data/recipes';

//---- attach event listeners --------------------------------------------------
document.addEventListener('DOMContentLoaded', onLoad);
document.querySelector('nav').addEventListener('click', onNavClick);

async function onLoad() {
    const userData = getUserData();

    if (userData != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }

    route('/');
};

function onNavClick(event) {
    if (event.target.tagName == 'A') {
        event.preventDefault();

        const url = new URL(event.target.href);
        route(url.pathname);
    }
}

async function onLogout() {
    const result = await logout();

    sessionStorage.removeItem('userData');

    if (result.status != 204) {
        alert(await response.json());
    } else {
        onLoad();
    }
}

export { recipesUrl, onLoad, onLogout }