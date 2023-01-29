import { showCatalog } from './catalog.js';
import { isEmptyField } from '../utils.js';
import { register } from '../api/authentication.js';

let main;
let section;
let setActiveNav;
let ctx = null;

export function setupRegister(targetMain, targetSection, onActiveNav, ctxExt) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
    ctx = ctxExt;

    //---- get elements ------------------------------------------------------------
    const form = targetSection.querySelector('form');

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
        const rePass = formData.get('rePass').trim();

        if (password != rePass) {
            return alert('Passwords don\'t match');
        }

        await register(email, password);

        form.reset();
        ctx.setUserNav();
        showCatalog();
    }
}


export function showRegister() {
    setActiveNav('registerLink');
    main.innerHTML = '';
    main.appendChild(section);
}