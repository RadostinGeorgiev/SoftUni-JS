import { html } from '../lib.js';

export const detailsTemplate = (item, deleteHandler, isOwner, likes, showLikeBtn, likesHandler) => html`
    <!-- Details Page ( for Guests and Users ) -->
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${item.title}</h3>
            <p class="type">${item.type}</p>
            <p class="img"><img src=${item.imageUrl}></p>
            <div class="actions">
                <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                ${itemsControlTemplate(item, deleteHandler, isOwner)}
    
                <!-- Bonus -->
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                ${likesControlTemplate(showLikeBtn, likesHandler)}
    
                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: ${likes}</span>
                </div>
                <!-- Bonus -->
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${item.description}</p>
        </div>
    </section>
`;

const itemsControlTemplate = (item, deleteHandler, isOwner) => {
    if (isOwner) {
        return html`
        <a class="button" href="/edit/${item._id}">Edit</a>
        <a class="button" href="javascript:void(0);" @click=${deleteHandler}>Delete</a>
        `
    } else { return null; }
}

const likesControlTemplate = (showLikeBtn, likesHandler) => {
    if (showLikeBtn) {
        return html`
            <a class="button" href="javascript:void(0);" @click=${likesHandler}>Like</a>`
    } else { return null; }
}