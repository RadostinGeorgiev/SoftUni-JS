import { html } from '../lib.js';

export const dashboardTemplate = (items, user) => html`
    <!-- Dashboard page -->
     ${user 
      ? html`
        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <ul class="my-books-list">
              ${items.length > 0 ? items.map(itemCardTemplate) : ''}
            </ul>
      ` 
      : html`
        <section id="dashboard-page" class="dashboard">
          <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
            <ul class="other-books-list">
              ${items.length > 0 ? items.map(itemCardTemplate) : ''}
            </ul>
      `}
            
          ${items.length == 0 
          ? html`
              ${user 
                ? html`
                  <!-- Display paragraph: If there are no books in the database -->
                  <p class="no-books">No books in database!</p>
                `
                : html`
                  <!-- Display paragraph: If the user doesn't have his own books  -->
                  <p class="no-books">No books in database!</p>
                `
              }` 
          : ''}
        </section>
`;

export const itemCardTemplate = (item) => html`
  <li class="otherBooks">
      <h3>${item.title}</h3>
      <p>Type: ${item.type}</p>
      <p class="img"><img src=${item.imageUrl}></p>
      <a class="button" href="${`/details/${item._id}`}">Details</a>
  </li>
`;