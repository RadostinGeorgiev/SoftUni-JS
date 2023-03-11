import { html } from '../lib.js';

export const detailsTemplate = (item, deleteHandler, isOwner) => html`
        <!--Details Page-->
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src=${item.imgUrl}>
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${item.name}</h1>
                        <h3>Artist: ${item.artist}</h3>
                        <h4>Genre: ${item.genre}</h4>
                        <h4>Price: $${item.price}</h4>
                        <h4>Date: ${item.date}</h4>
                        <p>Description: ${item.description}</p>
                    </div>

                    <!-- Only for registered user and creator of the album-->
                    ${itemsControlsTemplate(item, isOwner, deleteHandler)}
                </div>
            </div>
        </section>
`;

const itemsControlsTemplate = (item, isOwner, deleteHandler) => {
    if (isOwner) {
        return html`
            <div class="actionBtn">
                <a href="/edit/${item._id}" class="edit">Edit</a>
                <a href="javascript:void(0);" class="remove" @click=${deleteHandler}>Delete</a>
            </div>
        `
    } else { return null; }
}