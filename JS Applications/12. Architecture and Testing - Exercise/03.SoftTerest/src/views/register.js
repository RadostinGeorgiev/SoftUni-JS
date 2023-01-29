
import { register } from "../api/authentication.js";
import { isEmptyField } from "../utils.js";

//---- get elements ------------------------------------------------------------
const section = document.getElementById('registerPage');
const form = section.querySelector('form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

section.remove();
let ctx = null;

export function showRegisterPage(ctxExt) {
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
    const repeatPassword = formData.get('repeatPassword').trim();

    if (password != repeatPassword) {
        return alert('Passwords don\'t match');
    }

    await register(email, password);
    
    form.reset();
    ctx.updateNav();

    //---- redirect to home page -----------------------------------------------
    ctx.goTo('home');
}