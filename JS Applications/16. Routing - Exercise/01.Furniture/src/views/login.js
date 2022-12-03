import { login } from "../api/authentication.js";
import { loginTemplate } from "../templates/loginTemplate.js";
import { isEmptyField } from "../utils.js";

export async function loginView(ctx) {
    const ctxSubmit = onSubmit.bind(null, ctx);
    update();

    function update(errorMsg) {
        const template = loginTemplate(ctxSubmit, errorMsg);

        ctx.renderView(template);
    }

    async function onSubmit(ctx, event) {
        event.preventDefault();
        const form = event.target;

        //---- read form fields ----------------------------------------------------
        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        try {
            //---- checking for empty fields -------------------------------------------
            if (isEmptyField(form)) {
                throw Error('Please, fill all fields');
            }

            await login(email, password);
            // alert('User logged in successfully!');

            form.reset();

            //---- redirect to dashboard page -----------------------------------------------
            ctx.page.redirect('/dashboard');
        } catch (error) {
            update(error.message);
        }
    }
}

