import { getUserData } from "../api/authentication.js";
import { navigationTemplate } from "../templates/navigationTemplate.js";

async function navigationView(ctx, next) { 
    const user = getUserData(); 
    const template = navigationTemplate(ctx, user);

    ctx.renderNav(template);

    next();
}

export { navigationView }