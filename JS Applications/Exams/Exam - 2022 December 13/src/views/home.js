import { homeTemplate } from "/src/templates/homeTemplate.js";

async function homeView(ctx) {
    const template = homeTemplate();

    ctx.renderView(template);
}

export { homeView }