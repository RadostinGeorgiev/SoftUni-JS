import { logout } from './api/authentication.js';

import { setUserNav, setActiveNav } from './api/navigation.js';

import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';

//---- get elements ------------------------------------------------------------
const main = document.querySelector('main');
const logoutBtn = document.getElementById('logoutBtn');

//---- attach event listeners --------------------------------------------------
logoutBtn.addEventListener('click', onLogout);

//---- creating associations between views and showPage functions---------------
const views = {
    'home': showHome,
    'register': showRegister,
    'login': showLogin,
    'catalog': showCatalog,
    'create': showCreate,
    'details': showDetails,
    'edit': showEdit,
}

const ctx = {
    showSection,
    showView,
    setUserNav,
    setActiveNav
}

window.addEventListener('load', async () => {
    document.getElementById('views').remove();

    // Start application in home view
    setUserNav();
    ctx.showView('home');
});

//---- function to display the current section ---------------------------------
function showSection(section) {
    main.replaceChildren(section);
}

//---- function for page view --------------------------------------------------
function showView(name, ...params) {
    const view = views[name];

    if (typeof view == 'function') {
        view(ctx, ...params);
    }
}

//---- logout function -----------------------------------------------------
async function onLogout(event) {
    event.preventDefault();

    await logout();

    setUserNav();
    ctx.showView('home');
}

export { showView };