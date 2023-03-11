import { html } from '../lib.js';

export const navigationTemplate = (ctx, isLogged) => html`
  <!-- Navigation -->
  <h1><a class="home" href="/">GamesPlay</a></h1>
  <nav>
      <a href="/catalogue">All games</a>
      ${isLogged 
      ? html`
      <!-- Logged-in users -->
      <div id="user">
          <a href="/create">Create Game</a>
          <a href="/logout">Logout</a>
      </div>
      `
      : html`
      <!-- Guest users -->
      <div id="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
      </div>
      `}
  </nav>
`;