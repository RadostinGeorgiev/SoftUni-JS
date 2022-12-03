import { isLogged } from "../api/authentication.js";
import { navigationTemplate } from "../templates/navigationTemplate.js";

export async function navigationView(ctx, next) {  
    const template = navigationTemplate(ctx, isLogged());

    ctx.renderNav(template);

    next();
}