import { html, ifDefined } from './../lib.js';

export const navigationTemplate = (ctx, isLogged) => html`
<h1><a href="/">Furniture Store</a></h1>
<nav>
    <a id="catalogLink" href="/dashboard" class=${ifDefined(ctx.pathname.startsWith('/dashboard') ? 'active' : undefined)}>Dashboard</a>
${isLogged 
? html`
    <div id="user">
        <a id="createLink" href="/create" class=${ifDefined(ctx.pathname.startsWith('/create') ? 'active' : undefined)}>Create Furniture</a>
        <a id="profileLink" href="/my-furniture" class=${ifDefined(ctx.pathname.startsWith('/my-furniture') ? 'active' : undefined)}>My Publications</a>
        <a id="logoutBtn" href="/logout" >Logout</a>
    </div>`
: html`
    <div id="guest">
        <a id="loginLink" href="/login" class=${ifDefined(ctx.pathname.startsWith('/login') ? 'active' : undefined)}>Login</a>
        <a id="registerLink" href="/register" class=${ifDefined(ctx.pathname.startsWith('/register') ? 'active' : undefined)}>Register</a>
    </div>`}
</nav>`;