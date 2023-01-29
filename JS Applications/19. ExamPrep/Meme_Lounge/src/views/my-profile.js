import { getUserData, isLogged } from "../api/authentication.js";
import { getItemsByUserId } from "../api/data.js";
import { myProfileTemplate } from "../templates/myProfileTemplate.js";

async function myProfileView(ctx) {
    const user = isLogged()
        ? getUserData()
        : null;
    const items = await getItemsByUserId(user.id);

    const template = myProfileTemplate(items, user);

    ctx.renderView(template);
}

export { myProfileView }