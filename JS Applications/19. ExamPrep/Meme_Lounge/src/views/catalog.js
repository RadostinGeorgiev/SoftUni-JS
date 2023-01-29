import { isLogged } from "../api/authentication.js";
import { getAllItems } from "../api/data.js";
import { catalogTemplate } from "../templates/catalogTemplate.js";

async function catalogView(ctx) {
    const items = await getAllItems();
    const isLoggedIn = isLogged();

    const template = catalogTemplate(items, isLoggedIn);

    ctx.renderView(template);
}

export { catalogView }