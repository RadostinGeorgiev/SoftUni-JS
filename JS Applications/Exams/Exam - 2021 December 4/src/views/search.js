import { isLogged } from "../api/authentication.js";
import { getSearchItems } from "../api/data.js";
import { searchTemplate } from "../templates/searchTemplate.js";
import { parseQueryString } from "../utils.js";

async function searchView(ctx) {
    const ctxSearch = onSearch.bind(null, ctx);
    const isLoggedIn = isLogged();

    const query = parseQueryString(ctx.querystring);
    const search = query.query || [];

    let items = [];
    if (search && search.length > 0) {
        items = await getSearchItems(search)
    }

    const template = searchTemplate(items, isLoggedIn, ctxSearch, search);

    ctx.renderView(template);
}

function onSearch(ctx, event) {
    const search = document.getElementById('search-input').value;

    if (search) {
        ctx.page.redirect(`/search?query=${encodeURIComponent(search)}`);
    }
}

export { searchView }