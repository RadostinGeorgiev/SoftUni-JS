import { showCatalog } from './catalog.js';
import { isEmptyField } from "../utils.js";
import { login } from '../api/authentication.js';

let main;
let section;
let setActiveNav;
let ctx = null;

export function setupLogin(targetMain, targetSection, onActiveNav, ctxExt) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
    ctx = ctxExt;

    //---- get elements ------------------------------------------------------------
    const form = section.querySelector('form');

    //---- attach event listeners --------------------------------------------------
    form.addEventListener('submit', onSubmit);

    async function onSubmit(event) {
        event.preventDefault();

        //---- checking for empty fields -------------------------------------------
        if (isEmptyField(form)) {
            return alert('Please, fill all fields');
        }

        //---- read form fields ----------------------------------------------------
        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        await login(email, password);

        form.reset();
        ctx.setUserNav();
        showCatalog();
    }
}

export function showLogin() {
    setActiveNav('loginLink');
    main.innerHTML = '';
    main.appendChild(section);
}