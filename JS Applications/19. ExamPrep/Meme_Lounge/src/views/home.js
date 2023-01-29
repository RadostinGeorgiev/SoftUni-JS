import { isLogged } from "../api/authentication.js";
import { catalogTemplate } from "../templates/catalogTemplate.js";
import { homeTemplate } from "../templates/homeTemplate.js";

async function homeView(ctx) {
    const template = isLogged()
        ? catalogTemplate()
        : homeTemplate();

    ctx.renderView(template);
}

export { homeView }