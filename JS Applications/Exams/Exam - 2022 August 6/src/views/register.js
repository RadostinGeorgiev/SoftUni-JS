import { register } from "../api/authentication.js";
import { registerTemplate } from "../templates/registerTemplate.js";
import { isEmptyField } from "../utils.js";

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

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePass = formData.get('re-password').trim();

    //---- checking for empty fields -------------------------------------------
    if (isEmptyField(form)) {
        return alert('Please, fill all fields');
    }

    if (password != rePass) {
        return alert('Passwords don\'t match');
    }

    await register(email, password);
    alert('User registered in successfully!');

    form.reset();

    //---- redirect to dashboard page -----------------------------------------------
    ctx.page.redirect('/dashboard');
}

export { registerView }