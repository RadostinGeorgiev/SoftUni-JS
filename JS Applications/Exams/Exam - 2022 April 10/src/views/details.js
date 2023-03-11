import { getUserId, isLogged } from "../api/authentication.js";
import { getItemById, deleteItemById, getDonationsByPostId, getDonationsByPostAndUserId, addDonations } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";

async function detailsView(ctx) {
    const ctxDelete = onDelete.bind(null, ctx);
    const ctxDonate = onDonate.bind(null, ctx);

    let item = await getItemById(ctx.params.id);
    // item.alt = item.imageUrl.match(/.*\/(.+?)\./)[1];

    const isLoggedIn = isLogged();

    const userId = isLoggedIn ? getUserId() : null;
    const isOwner = isLoggedIn ? (userId === item._ownerId) : false;

    const donations = await getDonationsByPostId(ctx.params.id);
    const isDonated = await getDonationsByPostAndUserId(ctx.params.id, userId);

    const template = detailsTemplate(item, ctxDelete, isLoggedIn, isOwner, isDonated, donations, ctxDonate);

    ctx.renderView(template);
}

async function onDelete(ctx, event) {
    const confirmation = confirm('Are you sure you would like to delete this item?');

    if (confirmation) {
        await deleteItemById(ctx.params.id);
        alert('Item deleted successfully!');

        ctx.page.redirect('/dashboard');
    }
}

async function onDonate(ctx, event) {
    await addDonations(ctx.params.id);

    ctx.page.redirect(`/details/${ctx.params.id}`);
}

export { detailsView }