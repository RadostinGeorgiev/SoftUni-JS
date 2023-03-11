import { html } from '../lib.js';

export const catalogueTemplate = (items) => html`
  <!-- Catalogue -->
  <section id="catalog-page">
      <h1>All Games</h1>
      <!-- Display div: with information about every game (if any) -->
      ${items.length > 0 
      ? items.map(itemCardTemplate) 
      : html`
        <!-- Display paragraph: If there is no games  -->
        <h3 class="no-articles">No articles yet</h3>
      `}
  </section>
`;

export const itemCardTemplate = (item) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${item.imageUrl}>
        <h6>${item.category}</h6>
        <h2>${item.title}</h2>
        <a href=${`/details/${item._id}`} class="details-button">Details</a>
    </div>
</div>
`;