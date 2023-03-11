import { html } from '../lib.js';

export const navigationTemplate = (ctx, isLogged) => html`
       <!-- Navigation -->
       <nav>
            <section class="logo">
              <a href="/">
              <img src="./images/logo.png" alt="logo" >
              </a>
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>

                ${!isLogged 
                ? html`
                  <!--Only Guest-->
                  <li><a href="/login">Login</a></li>
                  <li><a href="/register">Register</a></li>
                `
                : html`
                  <!--Only Users-->
                  <li><a href="/create">Create Postcard</a></li>
                  <li><a href="/logout">Logout</a></li>
                `}
            </ul>
</nav>`;