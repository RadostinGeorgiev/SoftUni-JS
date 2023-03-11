import { page } from './lib.js';
import { assignContainers, decorateContext } from './api/render.js';
import { logout } from './api/authentication.js';

import { navigationView } from './views/navigation.js';
import { homeView } from './views/home.js';
import { catalogView } from './views/catalog.js';
import { detailsView } from './views/details.js';
import { createView } from './views/create.js';
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { searchView } from './views/search.js';

const navigation = document.querySelector('header');
const root = document.querySelector('main');

assignContainers(navigation, root);

page(decorateContext);
page(navigationView);

page('/', '/home');
page('/index.html', '/home');

page('/home', homeView);
page('/catalog', catalogView);
page('/details/:id', detailsView);
page('/create', createView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/search', searchView);
page('/logout', onLogout);

page.start();

async function onLogout(ctx) {
    await logout();
    alert('Logout successful!');

    ctx.page.redirect('/home');
}