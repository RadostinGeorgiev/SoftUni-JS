import { login } from "../api/authentication.js";
import { loginTemplate } from "../templates/loginTemplate.js";
import { isEmptyField } from "../utils.js";

async function loginView(ctx) {
    const ctxSubmit = onSubmit.bind(null, ctx);
    const template = loginTemplate(ctxSubmit);

    ctx.renderView(template);
}

async function onSubmit(ctx, event) {
    event.preventDefault();
    const form = event.target;

    //---- read form fields ----------------------------------------------------
    const formData = new FormData(event.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    //---- checking for empty fields -------------------------------------------
    if (isEmptyField(form)) {
        return alert('Please, fill all fields');
    }

    await login(email, password);
    alert('User logged in successfully!');

    form.reset();

    //---- redirect to dashboard page -----------------------------------------------
    ctx.page.redirect('/products');
}

export { loginView }