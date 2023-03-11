import { html } from '../lib.js';

export const catalogTemplate = (items, isLoggedIn) => html`
    <!--Catalog-->
    <section id="catalogPage">
        <h1>All Albums</h1>

         ${items.length > 0 
            ? items.map(i => itemCardTemplate(i, isLoggedIn)) 
            : html`
                <!--No albums in catalog-->
                <p>No Albums in Catalog!</p>
            `}
    </section>
`;

export const itemCardTemplate = (item, isLoggedIn) => html`
    <div class="card-box">
        <img src=${item.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${item.name}</p>
                <p class="artist">Artist: ${item.artist}</p>
                <p class="genre">Genre: ${item.genre}</p>
                <p class="price">Price: $${item.price}</p>
                <p class="date">Release Date: ${item.date}</p>
            </div>
            <div class="btn-group">
                ${isLoggedIn
                ? html`
                    <a href=${`/details/${item._id}`} id="details">Details</a>
                ` 
                : ''}
            </div>
        </div>
    </div>
`;