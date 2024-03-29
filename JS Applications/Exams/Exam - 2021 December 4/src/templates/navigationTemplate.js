import { html, ifDefined } from '../lib.js';

export const navigationTemplate = (ctx, isLogged) => html`
    <nav>
        <img src="./images/headphones.png">
        <a href="/home">Home</a>
        <ul>
          <!--All user-->
          <li><a href="/catalog">Catalog</a></li>
          <li><a href="/search">Search</a></li>
          ${!isLogged
          ? html`
              <!--Only guest-->
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
              `
          : html`
              <!--Only user-->
              <li><a href="/create">Create Album</a></li>
              <li><a href="/logout">Logout</a></li>
          `}
        </ul>
    </nav>
`;