import { editItemById, getItemById } from "../api/data.js";
import { notify } from "../notify.js";
import { editTemplate } from "../templates/editTemplate.js";
import { isEmptyField } from "../utils.js";

async function editView(ctx) {
    const ctxSubmit = onSubmit.bind(null, ctx);
    const item = await getItemById(ctx.params.id);
    const template = editTemplate(item, ctxSubmit);

    ctx.renderView(template);
}

async function onSubmit(ctx, event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    //---- checking for empty fields -------------------------------------------
    if (isEmptyField(form)) {
        return notify('Please, fill the required fields!');
    }

    const result = await editItemById(data, ctx.params.id);
    alert('Item updated successfully!');

    form.reset();

    //---- redirect to dashboard page -----------------------------------------------
    ctx.page.redirect(`/details/${ctx.params.id}`);
}

export { editView }