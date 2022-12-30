//TODO
//[ ] improve HTML structure
//[ ] create app.js module
//[ ] create router.js module with hide & display of view
//place holders of all views

//implement views
// -create request logic
// -DOM manipulation logic

//[ ] catalog
//[ ] login
//[ ] register
//[ ] create
//[ ] details
//[ ] like
//[ ] edit
//[ ] delete

import { routes } from "./router.js";
import { logout } from "./api/api.js";
import { showHome } from "./home.js";
import { getUserData } from "./utils.js";

//---- get elements ------------------------------------------------------------
const welcome = document.getElementById('welcome-msg');
const main = document.querySelector('main');
const buttonAddMovie = document.getElementById('add-movie-button');

//---- attach event listeners --------------------------------------------------
document.addEventListener('DOMContentLoaded', onLoad);
document.querySelector('nav').addEventListener('click', onNavigate);
buttonAddMovie.addEventListener('click', onNavigate);

//---- create associative array from sections ------------------------------   
const sections = [...document.querySelectorAll('.view-section')]
    .reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
    }, {});

//---- detach all sections from home page ----------------------------------
function hideAllSections() {
    for (const key in sections) {
        sections[key].remove();
    }
}

function showSection(section) {
    hideAllSections();
    main.replaceChildren(sections[section]);
}

function onLoad() {
    hideAllSections();

    const user = [...document.getElementsByClassName('nav-item user')];
    const guest = [...document.getElementsByClassName('nav-item guest')];

    const userData = getUserData();

    if (userData) {
        user.forEach(element => { element.style.display = 'block' });
        guest.forEach(element => { element.style.display = 'none' });

        welcome.textContent = `Welcome, ${userData.email}`;
    } else {
        user.forEach(element => { element.style.display = 'none' });
        guest.forEach(element => { element.style.display = 'block' });
    }

    showHome();
}

function onNavigate(event) {
    if (event.target.tagName == 'A' && event.target.href) {
        const url = new URL(event.target.href);
        const view = routes[url.pathname];

        if (typeof view == 'function') {
            event.preventDefault();
            view();
        }
    }
}

async function onLogout() {
    const result = await logout();

    sessionStorage.removeItem('userData');

    if (result.status != 204) {
        console.error(await response.json());
    } else {
        onLoad();
    }
}

export { hideAllSections, showSection, onLoad, onLogout }