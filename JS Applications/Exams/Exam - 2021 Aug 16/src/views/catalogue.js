import { getAllItems } from "/src/api/data.js";
import { catalogueTemplate } from "/src/templates/catalogueTemplate.js";

async function catalogueView(ctx) {
    const items = await getAllItems();
    // const altItems = items.map(x => ({ ...x, alt: x.imageUrl.match(/.*\/(.+?)\./)[1] }));

    const template = catalogueTemplate(items);

    ctx.renderView(template);
}

export { catalogueView }