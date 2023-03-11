import { html } from '../lib.js';

export const dashboardTemplate = (items, user) => html`
    <!-- Dashboard page -->
     ${user 
      ? html`
      <section id="dashboard-page">
        <h1 class="title">My Posts</h1>
        <div class="my-posts">
          ${items.length > 0 ? items.map(itemCardTemplate) : ''}
        </div>
        ` 
      : html`
      <section id="my-posts-page">
        <h1 class="title">All Posts</h1>
        <div class="all-posts">
          ${items.length > 0 ? items.map(itemCardTemplate) : ''}
        </div>
      `}
    
      <!-- Display a div with information about every post (if any)-->
    
      <!-- Display an h1 if there are no posts -->
       ${items.length == 0 
        ? html`
            ${user 
              ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
              : html`<h1 class="title no-posts-title">No posts yet!</h1>`
            }` 
        : ''}

    </section>
`;

export const itemCardTemplate = (item) => html`
    <div class="post">
      <h2 class="post-title">${item.title}</h2>
      <img class="post-image" src="${item.imageUrl}" alt="Kids clothes">
      <div class="btn-wrapper">
        <a href=${`/details/${item._id}`} class="details-btn btn">Details</a>
      </div>
    </div>
`;