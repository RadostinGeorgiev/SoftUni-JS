import { getUserId, isLogged } from "../api/authentication.js";
import { deleteItemById, getItemById } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";

export async function detailsView(ctx) {
    const ctxDelete = onDelete.bind(null, ctx);

    const furniture = await getItemById(ctx.params.id);
    const isOwner = isLogged() && getUserId() === furniture._ownerId;

    const template = detailsTemplate(furniture, ctxDelete, isOwner);

    ctx.renderView(template);
}

async function onDelete(ctx, event) {
    // const confirmForm = confirm('Are you sure you would like to delete this item?');

    // if (confirmForm) {
        await deleteItemById(ctx.params.id);
        // alert('Item deleted successfully!');

        ctx.page.redirect('/dashboard');
    // }
}