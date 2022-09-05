import { showCatalog } from "./catalog.js"
import { showCreate } from "./create.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { onLogout } from "./app.js";

const routes = {
    '/': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/create': showCreate,
    '/logout': onLogout,
}

function route(path) {
    routes[path]();
}

export { route }