import { register } from "../api/authentication.js";
import { registerTemplate } from "../templates/registerTemplate.js";
import { isEmptyField } from "../utils.js";
import { notify } from "../notify.js";

async function registerView(ctx) {
    const ctxSubmit = onSubmit.bind(null, ctx);
    const template = registerTemplate(ctxSubmit);

    ctx.renderView(template);
}

async function onSubmit(ctx, event) {
    event.preventDefault();
    const form = event.target;

    //---- read form fields ----------------------------------------------------
    const formData = new FormData(event.target);

    const username = formData.get('username').trim();
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePass = formData.get('repeatPass').trim();
    const gender = formData.get('gender');

    //---- checking for empty fields -------------------------------------------
    if (isEmptyField(form)) {
        return notify('Please, fill all fields');
    }

    if (password != rePass) {
        return notify('Passwords don\'t match');
    }

    await register(username, email, password, gender);
    alert('User registered in successfully!');

    form.reset();

    //---- redirect to dashboard page -----------------------------------------------
    ctx.page.redirect('/catalog');
}

export { registerView }