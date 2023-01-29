import { html } from '../lib.js';

export const detailsTemplate = (item, deleteHandler, isOwner) => html`
    <!-- Details Meme Page (for guests and logged users) -->
    <section id="meme-details">
        <h1>Meme Title: ${item.title}</h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src=${item.imageUrl}>
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>${item.description}</p>

                <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                ${itemsControlsTemplate(item, isOwner, deleteHandler)}
                
            </div>
        </div>
    </section>
`;

const itemsControlsTemplate = (item, isOwner, deleteHandler) => {
    if (isOwner) {
        return html`
            <a class="button warning" href="/edit/${item._id}">Edit</a>
            <button class="button danger" href="javascript:void(0);" @click=${deleteHandler}>Delete</button>
        `
    } else { return null; }
}