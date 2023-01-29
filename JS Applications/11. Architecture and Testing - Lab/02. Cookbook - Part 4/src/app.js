import { getUserData, logout } from './api/authentication.js';

import { setupHome, showHome } from './views/home.js';
import { setupCatalog, showCatalog } from './views/catalog.js';
import { setupCreate, showCreate } from './views/create.js';
import { setupLogin, showLogin } from './views/login.js';
import { setupRegister, showRegister } from './views/register.js';
import { setupDetails } from './views/details.js';
import { setupEdit } from './views/edit.js';


window.addEventListener('load', async () => {
    setUserNav();

    //---- get elements ------------------------------------------------------------
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    const logoutBtn = document.getElementById('logoutBtn');

    //---- attach event listeners --------------------------------------------------
    nav.addEventListener('click', onNavigate);
    logoutBtn.addEventListener('click', onLogout);

    const ctx = {
        goTo,
        setUserNav
    }

    setupHome(main, document.getElementById('home'), setActiveNav);
    setupCatalog(main, document.getElementById('catalog'), setActiveNav);
    setupCreate(main, document.getElementById('create'), setActiveNav, ctx);
    setupLogin(main, document.getElementById('login'), setActiveNav, ctx);
    setupRegister(main, document.getElementById('register'), setActiveNav, ctx);
    setupDetails(main, document.getElementById('details'), setActiveNav);
    setupEdit(main, document.getElementById('edit'), setActiveNav);
    document.getElementById('views').remove();

    //---- creating associations between navbar links and views --------------------
    const links = {
        'homeLink': 'home',
        'registerLink': 'register',
        'loginLink': 'login',
        'catalogLink': 'catalog',
        'createLink': 'create',
    };

    //---- creating associations between views and showPage functions---------------
    const views = {
        'home': showHome,
        'register': showRegister,
        'login': showLogin,
        'catalog': showCatalog,
        'create': showCreate,
    }


    //---- function for page redirect ----------------------------------------------
    function goTo(name, ...params) {
        const view = views[name];

        if (typeof view == 'function') {
            view(ctx, ...params);
        }
    }

    // Start application in home view
    setUserNav();
    goTo('home');

    //---- page change function when navigating from navbar ------------------------
    function onNavigate(event) {
        const name = links[event.target.id];

        if (name) {
            event.preventDefault();
            goTo(name);
        }
    }

    function setActiveNav(targetId) {
        [...nav.querySelectorAll('a')].forEach(a => a.id == targetId ? a.classList.add('active') : a.classList.remove('active'));
    }

    function setUserNav() {
        const userData = getUserData();

        if (userData != null) {
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('guest').style.display = 'none';
        } else {
            document.getElementById('user').style.display = 'none';
            document.getElementById('guest').style.display = 'inline-block';
        }
    }

    //---- logout function ---------------------------------------------------------
    async function onLogout(event) {
        event.preventDefault();

        await logout();

        setUserNav();
        showCatalog();
    }
});