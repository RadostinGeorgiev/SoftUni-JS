import { html } from '../lib.js';

export const dashboardTemplate = (items) => html`
  <!--Dashboard-->
  <section id="dashboard">
      <h2 class="dashboard-title">Services for every animal</h2>
      <div class="animals-dashboard">
          ${items.length > 0 
            ? items.map(itemCardTemplate) 
            : html`
            <!--If there is no pets in dashboard-->
              <div>
                  <p class="no-pets">No pets in dashboard</p>
              </div>            
              `}
      </div>
  </section>
`;

export const itemCardTemplate = (item) => html`
  <div class="animals-board">
      <article class="service-img">
          <img class="animal-image-cover" src=${item.image}>
      </article>
      <h2 class="name">${item.name}</h2>
      <h3 class="breed">${item.breed}</h3>
      <div class="action">
          <a class="btn" href="${`/details/${item._id}`}">Details</a>
      </div>
`;