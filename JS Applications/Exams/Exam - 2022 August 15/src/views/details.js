import { getUserId, isLogged } from "../api/authentication.js";
import { deleteItemById, getItemById } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";

async function detailsView(ctx) {
    const ctxDelete = onDelete.bind(null, ctx);

    const item = await getItemById(ctx.params.id);
    const isOwner = isLogged() && getUserId() === item._ownerId;

    const template = detailsTemplate(item, ctxDelete, isOwner);

    ctx.renderView(template);
}

async function onDelete(ctx, event) {
    await deleteItemById(ctx.params.id);
    alert('Item deleted successfully!');

    ctx.page.redirect('/dashboard');
}

export { detailsView }