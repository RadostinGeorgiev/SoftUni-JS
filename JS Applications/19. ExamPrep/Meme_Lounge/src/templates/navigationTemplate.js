import { html } from '../lib.js';

export const navigationTemplate = (ctx, user) => html`
    <a href="/catalog">All Memes</a>
    ${user
    ? html`
        <!-- Logged users -->
        <div class="user">
            <a href="/create">Create Meme</a>
            <div class="profile">
                <span>Welcome, ${user.email}</span>
                <a href="/my-profile">My Profile</a>
                <a href="/logout">Logout</a>
            </div>
        </div>
    `
    : html`
        <!-- Guest users -->
        <div class="guest">
            <div class="profile">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            <a class="active" href="/home">Home Page</a>
        </div>
    `}
`;