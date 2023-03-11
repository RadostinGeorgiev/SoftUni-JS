import { html } from '../lib.js';

export const dashboardTemplate = (items, isLoggedIn) => html`
        <h2>Products</h2>
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
         ${items.length > 0 
            ? items.map(i => itemCardTemplate(i, isLoggedIn)) 
            : html`
                <!-- Display an h2 if there are no posts -->
                <h2>No products yet.</h2>
            `}
    </section>
`;

export const itemCardTemplate = (item, isLoggedIn) => html`
          <div class="product">
            <img src=${item.imageUrl} alt=${item.alt} />
            <p class="title">${item.name}</p>
            <p><strong>Price:</strong><span class="price">${item.price}</span>$</p>
            <a class="details-btn" href=${`/details/${item._id}`}>Details</a>
          </div>
`;