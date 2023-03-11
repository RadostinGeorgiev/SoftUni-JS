import { getUserId, isLogged } from "../api/authentication.js";
import { getItemById, deleteItemById, getLikesByItemId, getLikesByItemIdAndUserId, addLike } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";

async function detailsView(ctx) {
    const ctxDelete = onDelete.bind(null, ctx);
    const ctxLike = onLike.bind(null, ctx);

    const isLoggedIn = isLogged();
    const userId = isLoggedIn ? getUserId() : null;

    const [item, likes, hasLikes] = await Promise.all([
        getItemById(ctx.params.id),
        getLikesByItemId(ctx.params.id),
        isLoggedIn ? getLikesByItemIdAndUserId(ctx.params.id, userId) : false
    ]);

    const isOwner = isLoggedIn ? (userId === item._ownerId) : false;
    const showLikeBtn = isLoggedIn == true && isOwner == false && hasLikes == false;

    const template = detailsTemplate(item, ctxDelete, isOwner, likes, showLikeBtn, ctxLike);

    ctx.renderView(template);
}

async function onDelete(ctx, event) {
    const confirmation = confirm('Are you sure you would like to delete this item?');

    if (confirmation) {
        await deleteItemById(ctx.params.id);
        alert('Item deleted successfully!');

        ctx.page.redirect('/profile');
    }
}

async function onLike(ctx, event) {
    await addLike(ctx.params.id);

    ctx.page.redirect(`/details/${ctx.params.id}`);
}

export { detailsView }