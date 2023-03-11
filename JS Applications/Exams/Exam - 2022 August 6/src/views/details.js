import { getUserId, isLogged } from "../api/authentication.js";
import { addApplication, deleteItemById, getApplicationsByOfferAndUserId, getApplicationsByOfferId, getItemById } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";

async function detailsView(ctx) {
    const ctxDelete = onDelete.bind(null, ctx);
    const ctxApply = onApply.bind(null, ctx);

    let item = await getItemById(ctx.params.id);
    item.alt = item.imageUrl.match(/.*\/(.+?)\./)[1];

    const isLoggedIn = isLogged();

    const userId = isLoggedIn ? getUserId() : null;
    const isOwner = isLoggedIn ? (userId === item._ownerId) : false;

    const applications = await getApplicationsByOfferId(ctx.params.id);
    const isApplied = await getApplicationsByOfferAndUserId(ctx.params.id, userId);

    const template = detailsTemplate(item, ctxDelete, isOwner, isLoggedIn, applications, isApplied, ctxApply);

    ctx.renderView(template);
}

async function onDelete(ctx, event) {
    await deleteItemById(ctx.params.id);
    alert('Item deleted successfully!');

    ctx.page.redirect('/dashboard');
}

async function onApply(ctx, event) {
    await addApplication(ctx.params.id);

    ctx.page.redirect(`/details/${ctx.params.id}`);
}

export { detailsView }