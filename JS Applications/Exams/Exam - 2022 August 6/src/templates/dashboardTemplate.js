import { html } from '../lib.js';

export const dashboardTemplate = (items) => html`
    <!-- Dashboard page -->
        <section id="dashboard">
          <h2>Job Offers</h2>

          <!-- Display a div with information about every post (if any)-->
          ${items.length > 0 ? items.map(itemCardTemplate) : ''}

    <!-- Display an h2 if there are no posts -->
    ${items.length == 0 ? html`<h2>No offers yet.</h2>` : html``}
</section>
`;

export const itemCardTemplate = (item) => html`
          <div class="offer">
            <img src=${item.imageUrl} alt=${item.alt} />
            <p>
              <strong>Title: </strong><span class="title">${item.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${item.salary}</span></p>
            <a class="details-btn" href=${`/details/${item._id}`}>Details</a>
          </div>
`;