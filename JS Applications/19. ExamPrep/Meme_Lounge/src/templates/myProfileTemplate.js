import { html } from '../lib.js';

export const myProfileTemplate = (items, user) => html`
        <!-- Profile Page ( Only for logged users ) -->
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${items.length}</p>
                </div>
            </article>
            <section id="user-profile-page" class="user-profile">
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                <!-- Display : All created memes by this user (If any) --> 
                ${items.length > 0 
                    ? items.map(itemCardTemplate) 
                    : html`
                        <!-- Display : If user doesn't have own memes  --> 
                        <p class="no-memes">No memes in database.</p>
                `}
            </div>
        </section>
`;

export const itemCardTemplate = (item) => html`
    <div class="user-meme">
        <p class="user-meme-title">${item.title}</p>
        <img class="userProfileImage" alt="meme-img" src=${item.imageUrl}>
        <a class="button" href=${`/details/${item._id}`}>Details</a>
    </div>
`;