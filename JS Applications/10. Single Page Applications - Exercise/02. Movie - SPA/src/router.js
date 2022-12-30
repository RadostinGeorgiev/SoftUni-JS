import { showHome } from "./home.js"
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
import { onLogout } from "./app.js";
import { showCreate } from "./create.js";
import { showDetails } from "./details.js";
import { showEdit } from "./edit.js";

//---- get elements ------------------------------------------------------------

const routes = {
    '/': showHome,
    '/create': showCreate,
    '/edit': showEdit,
    '/register': showRegister,
    '/login': showLogin,
    '/logout': onLogout,
}

// function route(path) {
//     routes[path]();
// }

export { routes }