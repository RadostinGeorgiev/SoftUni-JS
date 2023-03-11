import { getUserId, isLogged } from "../api/authentication.js";
import { getItemById, deleteItemById, getComments, addComment } from "../api/data.js";
import { detailsTemplate } from "../templates/detailsTemplate.js";
import { isEmptyField } from "../utils.js";

async function detailsView(ctx) {
    const ctxDelete = onDelete.bind(null, ctx);
    const ctxComment = onComment.bind(null, ctx);

    let item = await getItemById(ctx.params.id);

    const isLoggedIn = isLogged();

    const userId = isLoggedIn ? getUserId() : null;
    const isOwner = isLoggedIn ? (userId === item._ownerId) : false;

    const comments = await getComments(ctx.params.id);

    const template = detailsTemplate(item, ctxDelete, isLoggedIn, isOwner, comments, ctxComment);

    ctx.renderView(template);
}

async function onDelete(ctx, event) {
    const confirmation = confirm('Are you sure you would like to delete this item?');

    if (confirmation) {
        await deleteItemById(ctx.params.id);
        alert('Item deleted successfully!');

        ctx.page.redirect('/home');
    }
}

async function onComment(ctx, event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const comment = formData.get('comment');

    //---- checking for empty fields -------------------------------------------
    if (isEmptyField(form)) {
        return alert('Please, fill the comment field!');
    }

    const result = await addComment(ctx.params.id, comment);
    // alert('Item added to comments successfully!');

    form.reset();

    //---- redirect to details page -----------------------------------------------
    ctx.page.redirect(`/details/${ctx.params.id}`);
}

export { detailsView }