import { getAllItems } from "/src/api/data.js";
import { dashboardTemplate } from "/src/templates/dashboardTemplate.js";

async function dashboardView(ctx) {
    const items = await getAllItems();

    const template = dashboardTemplate(items);

    ctx.renderView(template);
}

export { dashboardView }