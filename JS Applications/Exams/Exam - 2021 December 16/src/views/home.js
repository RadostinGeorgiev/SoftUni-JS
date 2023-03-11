import { getAllItems } from "/src/api/data.js";
import { homeTemplate } from "/src/templates/homeTemplate.js";

async function homeView(ctx) {
    const items = await getAllItems();
    const template = homeTemplate(items);

    ctx.renderView(template);
}

export { homeView }