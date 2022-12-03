import { getUserId, isLogged } from "../api/authentication.js";
import { getAllItems, getMyItem } from "../api/data.js";
import { dashboardTemplate } from "../templates/dashboardTemplate.js";

async function dashboardView(ctx) {
    const userPage = isLogged() && ctx.pathname == '/my-furniture';

    const items = userPage
        ? await getMyItem(getUserId())
        : await getAllItems();

    const template = dashboardTemplate(items, userPage);

    ctx.renderView(template);
}

export { dashboardView }