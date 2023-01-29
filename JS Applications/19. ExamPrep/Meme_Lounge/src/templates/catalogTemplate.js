import { html } from '../lib.js';

export const catalogTemplate = (items) => html`
        <!-- All Memes Page ( for Guests and Users )-->
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
				<!-- Display : All memes in database ( If any ) -->
                ${items.length > 0 
                    ? items.map(itemCardTemplate) 
                    : html`
                        <!-- Display : If there are no memes in database -->
                        <p class="no-memes">No memes in database.</p>
                `}
            </div>
        </section>
`;

export const itemCardTemplate = (item) => html`
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${item.title}</p>
                <img class="meme-image" alt="meme-img" src=${item.imageUrl}>
            </div>
            <div id="data-buttons">
                <a class="button" href=${`/details/${item._id}`}>Details</a>
            </div>
        </div>
    </div>
`;