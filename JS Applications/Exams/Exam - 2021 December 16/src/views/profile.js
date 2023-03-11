import { getUserData, isLogged } from "../api/authentication.js";
import { getMyItem } from "/src/api/data.js";
import { profileTemplate } from "/src/templates/profileTemplate.js";

async function profileView(ctx) {
    let user = null;
    const isLoggedIn = isLogged();
    if (isLoggedIn) {
        user = getUserData();
    }

    const items = isLoggedIn
        ? await getMyItem(user.id)
        : null;
    // const altItems = items.map(x => ({ ...x, alt: x.imageUrl.match(/.*\/(.+?)\./)[1] }));

    const template = profileTemplate(items, user);

    ctx.renderView(template);
}

export { profileView }