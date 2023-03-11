import { html } from '../lib.js';

export const navigationTemplate = (ctx, user) => html`
  <!-- Navigation -->
  <nav>
    <a href="/">Theater</a>
    <ul>
       ${user 
      ? html`
          <!--Only users-->
          <li><a href="/profile">Profile</a></li>
          <li><a href="/create">Create Event</a></li>
          <li><a href="/logout">Logout</a></li>
        `
      : html`
          <!--Only guest-->
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
      `}
       </ul>
  </nav>  
`;