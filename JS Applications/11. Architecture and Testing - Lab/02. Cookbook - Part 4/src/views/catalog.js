import { getAllItemsByPage, getItemsCount } from '../api/data.js';
import { e } from '../dom.js';

let ctx;

const ITEMS_PER_PAGE = 5;

//---- get elements ------------------------------------------------------------
const section = document.getElementById('catalog');

//---- read all recipes & fill page with recipes cards -------------------------
export async function showCatalog(ctxExt, page = 1) {
    ctx = ctxExt;
    ctx.setActiveNav('catalogLink');

    section.innerHTML = 'Loading&hellip;';
    ctx.showSection(section);

    const recipes = await getAllItemsByPage(page, ITEMS_PER_PAGE);
    const itemsCount = await getItemsCount();
    const pages = Math.ceil(itemsCount / ITEMS_PER_PAGE);

    const cards = recipes.map(createRecipePreview);

    const fragment = document.createDocumentFragment();

    fragment.appendChild(createPageHeader(page, pages));
    cards.forEach(c => fragment.appendChild(c));
    fragment.appendChild(createPageHeader(page, pages));

    section.innerHTML = '';
    section.appendChild(fragment);
}

//---- create card for recipe --------------------------------------------------
function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: () => ctx.showView('details', recipe._id) },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;
}

function createPageHeader(page, pages) {
    const result = e('div', { className: 'section-title' }, `Page ${page} of ${pages}`);

    if (page > 1) {
        result.appendChild(e('a', {
            className: 'pager',
            onClick: (e) => {
                e.preventDefault();
                ctx.showView('catalog', page - 1);
            }
        }, ' < Prev'));
    }

    if (page < pages) {
        result.appendChild(e('a', {
            className: 'pager',
            onClick: (e) => {
                e.preventDefault();
                ctx.showView('catalog', page + 1);
            }
        }, ' Next >'));
    }
    return result;
}