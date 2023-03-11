import { getAllItems } from "/src/api/data.js";
import { dashboardTemplate } from "/src/templates/dashboardTemplate.js";

async function dashboardView(ctx) {
    const items = await getAllItems();
    const altItems = items.map(x => ({...x, alt: x.imageUrl.match(/.*\/(.+?)\./)[1]}));


    const template = dashboardTemplate(altItems);

    ctx.renderView(template);
}

export { dashboardView }