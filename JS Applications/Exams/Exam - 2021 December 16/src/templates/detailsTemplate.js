import { html } from '../lib.js';

export const detailsTemplate = (item, deleteHandler, isOwner, likes, showLikeBtn, likesHandler) => html`
        <!--Details Page-->
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${item.title}</h1>
                    <div>
                        <img src=${item.imageUrl} />
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${item.description}</p>
                    <h4>Date: ${item.date}</h4>
                    <h4>Author: ${item.author}</h4>
                    <div class="buttons">
                        ${itemsControlsTemplate(item, isOwner, deleteHandler)}

                        ${likesControlTemplate(showLikeBtn, likesHandler)}
                    </div>
                    <p class="likes">Likes: ${likes}</p>
                </div>
            </div>
    </section>
`;

const itemsControlsTemplate = (item, isOwner, deleteHandler) => {
    if (isOwner) {
        return html`
            <a class="btn-delete" href="javascript:void(0);" @click=${deleteHandler}>Delete</a>
            <a class="btn-edit" href="/edit/${item._id}">Edit</a>
        `
    } else { return null; }
}

const likesControlTemplate = (showLikeBtn, likesHandler) => {
    if (showLikeBtn) {
        return html`
            <a class="btn-like" href="javascript:void(0);" @click=${likesHandler}>Like</a>`
    } else { return null; }
}