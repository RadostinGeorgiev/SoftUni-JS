import { getRecentItems } from '../api/data.js';
import { e } from '../dom.js';

let ctx;

//---- get elements ------------------------------------------------------------
const section = document.getElementById('home');
const recentRecipes = document.querySelector('.recent-recipes');
const catalogLink = document.querySelector('#home-catalog');

//---- attach event listeners --------------------------------------------------
catalogLink.addEventListener('click', onCatalogLinkClick);

export async function showHome(ctxExt) {
    ctx = ctxExt;
    ctx.setActiveNav('homeLink');
    recentRecipes.innerHTML = 'Loading&hellip;';
    ctx.showSection(section);

    const recipes = await getRecentItems();
    const cards = recipes.map(createRecipePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => {
        fragment.appendChild(c);
        fragment.appendChild(createSpacer());
    });

    recentRecipes.innerHTML = '';
    recentRecipes.appendChild(fragment);
}

function onCatalogLinkClick(event) {
    event.preventDefault();

    //---- redirect to catalog page ------------------------------------------
    ctx.showView('catalog');
};

//---- create card for recipe --------------------------------------------------
function createRecipePreview(recipe) {
    return e('article', { className: 'recent', onClick: () => ctx.showView('details', recipe._id) },
        e('div', { className: 'recent-preview' }, e('img', { src: recipe.img })),
        e('div', { className: 'recent-title' }, e('p', {}, recipe.name))
    );
}

//---- create free space between recipe cards ----------------------------------
function createSpacer() {
    return e('div', { className: 'recent-space' });
}