import { html } from '../lib.js';

export const navigationTemplate = (ctx, isLogged) => html`
       <!-- Navigation -->
       <h1><a href="/">Orphelp</a></h1>

        <nav>
          <div>
            <a href="/dashboard">Dashboard</a>
          </div>

      ${isLogged 
      ? html`
          <!-- Logged-in users -->
          <div class="user">
            <a href="/my-posts">My Posts</a>
            <a href="/create">Create Post</a>
            <a href="/logout">Logout</a>
          </div>
          `
      : html`
          <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
      `}
</nav>`;