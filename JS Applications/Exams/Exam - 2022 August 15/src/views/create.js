import { createItem } from "../api/data.js";
import { createTemplate } from "../templates/createTemplate.js";
import { isEmptyField } from "../utils.js";

async function createView(ctx) {
    const ctxSubmit = onSubmit.bind(null, ctx);
    const template = createTemplate(ctxSubmit);

    ctx.renderView(template);
}

async function onSubmit(ctx, event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    //---- checking for empty fields -------------------------------------------
    if (isEmptyField(form)) {
        return alert('Please, fill the required fields!');
    }

    const result = await createItem(data);
    alert('Item added to dashboard successfully!');

    form.reset();

    //---- redirect to dashboard page -----------------------------------------------
    ctx.page.redirect('/dashboard');
}

export { createView }