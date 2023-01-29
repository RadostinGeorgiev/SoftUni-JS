import { register } from '../api/authentication.js';
import { isEmptyField } from '../utils.js';

let ctx;

//---- get elements ------------------------------------------------------------
const section = document.getElementById('register');
const form = section.querySelector('form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

export function showRegister(ctxExt) {
    ctx = ctxExt;
    ctx.setActiveNav('registerLink');
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
    const rePass = formData.get('rePass').trim();

    if (password != rePass) {
        return alert('Passwords don\'t match');
    }

    await register(email, password);

    form.reset();
    ctx.setUserNav();
    ctx.showView('catalog');
}