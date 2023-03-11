import { isLogged } from "/src/api/authentication.js";
import { getAllItems, getSearchItems } from "../api/data.js";
import { searchTemplate } from "../templates/searchTemplate.js";
import { parseQueryString } from "../utils.js";

async function searchView(ctx) {
    const ctxSubmit = onSubmit.bind(null, ctx);
    const isLoggedIn = isLogged();

    const query = parseQueryString(ctx.querystring);
    const search = query.search || [];

    let items;
    if (search && search.length > 0) {
        items = await getSearchItems(search)
    } else {
        items = await getAllItems();
    }

    const template = searchTemplate(items, ctxSubmit, search, isLoggedIn);

    ctx.renderView(template);
}

function onSubmit(ctx, event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const query = formData.get('search').trim();

    ctx.page.redirect(`/search?query=${query}`);
}

export { searchView }