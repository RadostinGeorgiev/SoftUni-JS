import { html } from '../lib.js';

export const profileTemplate = (items, user) => html`
  <!--Profile Page-->
  <section id="profilePage">
    <div class="userInfo">
      <div class="avatar">
        <img src="./images/profilePic.png">
      </div>
      <h2>${user.email}</h2>
    </div>

    <div class="board">
      ${items.length > 0 
      ? html`
        <!--If there are event-->
          ${items.map(itemCardTemplate)} 
        </div>
        `
        : ''}
      
      <!--If there are no event-->
      ${items.length == 0
      ? html`
        <div class="no-events">
          <p>This user has no events yet!</p>
        </div>`
        : ''}
  </section>
`;

export const itemCardTemplate = (item) => html`
  <div class="eventBoard">
    <div class="event-info">
      <img src=${item.imageUrl}>
      <h2>${item.title}</h2>
      <h6>${item.date}</h6>
      <a href=${`/details/${item._id}`} class="details-button">Details</a>
    </div>
  </div>
`;