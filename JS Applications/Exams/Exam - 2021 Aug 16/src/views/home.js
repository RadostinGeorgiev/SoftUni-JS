import { getHomeItems } from "/src/api/data.js";
import { homeTemplate } from "/src/templates/homeTemplate.js";

async function homeView(ctx) {
    const items = await getHomeItems();
    // const altItems = items.map(x => ({ ...x, alt: x.imageUrl.match(/.*\/(.+?)\./)[1] }));

    const template = homeTemplate(items);

    ctx.renderView(template);
}

export { homeView }