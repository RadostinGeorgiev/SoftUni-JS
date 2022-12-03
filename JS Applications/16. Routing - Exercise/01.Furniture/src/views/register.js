import { register } from "../api/authentication.js";
import { registerTemplate } from "../templates/registerTemplate.js";
import { isEmptyField } from "../utils.js";

export async function registerView(ctx) {
    const ctxSubmit = onSubmit.bind(null, ctx);
    update(null, {});

    function update(errorMsg, errors) {
        const template = registerTemplate(ctxSubmit, errorMsg, errors);

        ctx.renderView(template);
    }

    async function onSubmit(ctx, event) {
        event.preventDefault();
        const form = event.target;

        //---- read form fields ----------------------------------------------------
        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('rePass').trim();

        try {
            //---- checking for empty fields -------------------------------------------
            if (isEmptyField(form)) {
                throw {
                    Msg: Error('Please, fill all fields'),
                    errorType: {
                        email: email == '',
                        password: password == '',
                        rePass: rePass == '',
                    }
                }
            }

            if (password != rePass) {
                throw {
                    Msg: Error('Passwords don\'t match'),
                    errorType: {
                        password: true,
                        rePass: true,
                    }
                }
            }

            await register(email, password);
            // alert('User registered in successfully!');

            form.reset();

            //---- redirect to dashboard page -----------------------------------------------
            ctx.page.redirect('/dashboard');

        } catch (error) {
            const message = error.message || error.Msg.message;
            update(message, error.errorType || {});
        }
    }
}

