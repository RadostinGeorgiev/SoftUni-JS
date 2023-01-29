import { login } from '../api/authentication.js';
import { isEmptyField } from "../utils.js";

let ctx;

//---- get elements ------------------------------------------------------------
const section = document.getElementById('login');
const form = section.querySelector('form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

export function showLogin(ctxExt) {
    ctx = ctxExt;
    ctx.setActiveNav('loginLink');
    ctx.showSection(section);
}

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
    ctx.showView('catalog');
}