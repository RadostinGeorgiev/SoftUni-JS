import { html } from '../lib.js';

export const searchTemplate = (items, searchHandler, search, isLogged) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required .value=${search} />
        <button @submit=${searchHandler} type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
        ${items.length == 0
            ? html`
            <!-- Display an h2 if there are no posts -->
            <h2>There are no results found.</h2>`
            : html`
            <ul class="card-wrapper">
                <!-- Display a li with information about every post (if any)-->
                ${items.map(i => itemTemplate(i, isLogged))}
            </ul>`
        }
    </div>
</section>
`;

const itemTemplate = (item, viewDetailsBtn) => html`
            <li class="card">
                <img src=${item.imageUrl} alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">${item.brand}</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">${item.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
                ${viewDetailsBtn
                ? html`<a class="details-btn" href=${`/details/${item._id}`}>Details</a>`
                : ''}
            </li>
`;