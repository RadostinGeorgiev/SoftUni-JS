import { getUserId, isLogged } from "../api/authentication.js";
import { getItemById, deleteItemById, getBoughtByItemId, getBoughtByItemIdAndUserId, addBuy } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";

async function detailsView(ctx) {
    const ctxDelete = onDelete.bind(null, ctx);
    const ctxBuy = onBuy.bind(null, ctx);

    const isLoggedIn = isLogged();
    const userId = isLoggedIn ? getUserId() : null;
    
    const [item, bought, hasBought] = await Promise.all([
        getItemById(ctx.params.id),
        getBoughtByItemId(ctx.params.id),
        isLoggedIn ? getBoughtByItemIdAndUserId(ctx.params.id, userId) : false
    ]);

    const isOwner = isLoggedIn && userId === item._ownerId;
    const showBuyBtn = isLoggedIn == true && isOwner == false && hasBought == false;

    const template = detailsTemplate(item, isOwner, ctxDelete, bought, showBuyBtn, ctxBuy);

    ctx.renderView(template);
}

async function onDelete(ctx, event) {
    await deleteItemById(ctx.params.id);
    alert('Item deleted successfully!');

    ctx.page.redirect('/products');
}

async function onBuy(ctx, event) {
    await addBuy(ctx.params.id);
    alert('Item added successfully!');

    ctx.page.redirect(`/details/${ctx.params.id}`);
}

export { detailsView }