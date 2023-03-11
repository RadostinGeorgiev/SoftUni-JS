import { getUserId, isLogged } from "../api/authentication.js";
import { getAllItems, getMyItem } from "/src/api/data.js";
import { dashboardTemplate } from "/src/templates/dashboardTemplate.js";

async function dashboardView(ctx) {
    const user = isLogged()
        ? ctx.pathname == '/my-posts'
        : null;

    const items = user
        ? await getMyItem(getUserId())
        : await getAllItems();
    const altItems = items.map(x => ({ ...x, alt: x.imageUrl.match(/.*\/(.+?)\./)[1] }));

    const template = dashboardTemplate(items, user);

    ctx.renderView(template);
}

export { dashboardView }