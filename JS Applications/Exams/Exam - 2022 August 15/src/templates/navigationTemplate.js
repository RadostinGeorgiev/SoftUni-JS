import { html, ifDefined } from '../lib.js';

export const navigationTemplate = (ctx, isLogged) => html`
<a id="logo" href="/"
  ><img id="logo-img" src="./images/logo.png" alt=""
/></a>

<nav>
  <div>
    <a href="/dashboard">Dashboard</a>
    <a href="/search">Search</a>
  </div>
      ${isLogged 
      ? html`
                <!-- Logged-in users -->
                <div class="user">
                  <a href="/create">Add Pair</a>
                  <a href="/logout">Logout</a>
                </div>`
      : html`
                <!-- Guest users -->
                <div class="guest">
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
                </div>
      `}
</nav>`;