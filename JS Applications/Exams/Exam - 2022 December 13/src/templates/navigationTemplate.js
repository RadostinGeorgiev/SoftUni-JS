import { html, ifDefined } from '../lib.js';

export const navigationTemplate = (ctx, isLogged) => html`
    <!-- Navigation -->
    <a id="logo" href="/"
        ><img id="logo-img" src="./images/logo.png" alt=""
    /></a>

    <nav>
        <div>
        <a href="/products">Products</a>
        </div>
        ${isLogged
        ? html`
        <!-- Logged-in users -->
        <div class="user">
            <a href="/create">Add Product</a>
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
    </nav>
`;