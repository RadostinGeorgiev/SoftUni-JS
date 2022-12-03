import { html } from './../lib.js';

export const dashboardTemplate = (items, user) => html`
        <div class="row space-top">
            <div class="col-md-12">
                ${user ? html`
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>` 
                : html`                
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>`}
            </div>
        </div>
        <div class="row space-top">
            ${items.length > 0
            ? items.map(furnitureCard)
            : html`<h2>There is no items in the list yet!</h2>`
            }
        </div>
`;

export const furnitureCard = (furniture) => html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${furniture.img}>
                        <p>${furniture.description}</p>
                        <footer>
                            <p>Price: <span>${furniture.price}</span></p>
                        </footer>
                        <div>
                            <a href=${`/details/${furniture._id}`} class="btn btn-info">Details</a>
                        </div>
                    </div>
                </div>
            </div>
`;