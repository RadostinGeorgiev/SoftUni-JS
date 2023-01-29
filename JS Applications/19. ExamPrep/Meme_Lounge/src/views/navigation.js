import { getUserData, isLogged } from "../api/authentication.js";
import { navigationTemplate } from "../templates/navigationTemplate.js";

async function navigationView(ctx, next) {
    const user = isLogged()
        ? getUserData()
        : null;
    const template = navigationTemplate(ctx, user);

    ctx.renderNav(template);

    next();
}

export { navigationView }