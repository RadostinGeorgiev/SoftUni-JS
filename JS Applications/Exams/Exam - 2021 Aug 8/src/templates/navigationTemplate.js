import { html } from '../lib.js';

export const navigationTemplate = (ctx, user) => html`
  <!-- Navigation -->
  <nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/dashboard">Dashboard</a>
       ${user 
      ? html`
        <!-- Logged-in users -->
        <div id="user">
            <span>Welcome, ${user.email}</span>
            <a class="button" href="/my-books">My Books</a>
            <a class="button" href="/create">Add Book</a>
            <a class="button" href="/logout">Logout</a>
        </div>
        `
      : html`
        <!-- Guest users -->
        <div id="guest">
            <a class="button" href="/login">Login</a>
            <a class="button" href="/register">Register</a>
        </div>
      `}
    </section>
  </nav>  
`;