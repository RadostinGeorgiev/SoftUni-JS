
import { login } from "../api/authentication.js";
import { isEmptyField } from "../utils.js";

//---- get elements ------------------------------------------------------------
const section = document.getElementById('loginPage');
const form = section.querySelector('form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

section.remove();

let ctx = null;

export function showLoginPage(ctxExt) {
    ctx = ctxExt;
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
    ctx.updateNav();

    //---- redirect to home page -----------------------------------------------
    ctx.goTo('home');
}