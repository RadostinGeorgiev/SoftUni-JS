import { page } from './lib.js';
import { assignContainers, decorateContext } from './api/render.js';
import { logout } from './api/authentication.js';

import { navigationView } from './views/navigation.js';
import { dashboardView } from './views/dashboard.js';
import { detailsView } from './views/details.js';
import { createView } from './views/create.js';
import { editView } from './views/edit.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

const navigation = document.querySelector('header');
const root = document.querySelector('div.container');

assignContainers(navigation, root);

page(decorateContext);
page(navigationView);

page('/', '/dashboard');
page('/index.html', '/dashboard');

page('/dashboard', dashboardView);
page('/details/:id', detailsView);
page('/create', createView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/my-furniture', dashboardView);
page('/logout', onLogout);

page.start();

async function onLogout(ctx) {
    await logout();
    // alert('Logout successful!');

    ctx.page.redirect('/dashboard');
}