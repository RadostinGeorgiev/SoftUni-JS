import { html } from '../lib.js';

export const dashboardTemplate = (items) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${items.length > 0 
            ? items.map(itemCardTemplate) 
            : ''}
    </ul>

    <!-- Display an h2 if there are no posts -->
    ${items.length == 0 ? html`<h2>There are no items added yet.</h2>` : html``}
</section>
`;

export const itemCardTemplate = (item) => html`
        <li class="card">
            <img src=${item.imageUrl} alt=${item.alt} />
            <p>
                <strong>Brand: </strong><span class="brand">${item.brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span class="model">${item.model}</span>
            </p>
            <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
            
            <a class="details-btn" href=${`/details/${item._id}`}>Details</a>
        </li>
`;