import { logout } from './api/authentication.js'

import { showHomePage } from './views/home.js'
import { showRegisterPage } from './views/register.js'
import { showLoginPage } from './views/login.js'
import { showDashboardPage } from './views/dashboard.js'
import { showCreatePage } from './views/create.js'
import { showDetailsPage } from './views/details.js'
import { getUserData } from './utils.js'


//---- creating associations between navbar links and views --------------------
const links = {
    'homeLink': 'home',
    'getStartedLink': 'home',
    'registerLink': 'register',
    'loginLink': 'login',
    'dashboardLink': 'dashboard',
    'createLink': 'create'
}

//---- creating associations between views and showPage functions---------------
const views = {
    'home': showHomePage,
    'register': showRegisterPage,
    'login': showLoginPage,
    'dashboard': showDashboardPage,
    'create': showCreatePage,
    'details': showDetailsPage,
}

//---- get elements ------------------------------------------------------------
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const logoutBtn = document.getElementById('logoutBtn');

//---- attach event listeners --------------------------------------------------
nav.addEventListener('click', onNavigate);
logoutBtn.addEventListener('click', onLogout);

const ctx = {
    goTo: redirect,
    showSection,
    updateNav
}

updateNav();
redirect('home');

function showSection(section) {
    main.replaceChildren(section);
}

//---- page change function when navigating from navbar ------------------------
function onNavigate(event) {
    const name = links[event.target.id];
    
    if (name) {
        event.preventDefault();
        redirect(name);
    }
}

//---- function for page redirect ----------------------------------------------
function redirect(name, ...params) {
    const view = views[name];
    if (typeof view == 'function') {
        view(ctx, ...params);
    }
}

//---- function to change the visibility of the links in the navbar according to the user's rights
function updateNav() {
    const userData = getUserData();
    
    const user = [...nav.querySelectorAll('.user')];
    const guest = [...nav.querySelectorAll('.guest')];
    
    if (userData) {
        user.forEach(element => { element.style.display = 'block' });
        guest.forEach(element => { element.style.display = 'none' });
    } else {
        user.forEach(element => { element.style.display = 'none' });
        guest.forEach(element => { element.style.display = 'block' });
    }
}

//---- logout function ---------------------------------------------------------
async function onLogout(event) {
    event.preventDefault();
    
    await logout();
    
    updateNav();
    redirect('home');
}