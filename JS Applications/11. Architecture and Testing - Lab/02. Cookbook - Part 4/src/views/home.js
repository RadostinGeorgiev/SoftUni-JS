import { getRecentItems } from '../api/data.js';
import { e } from '../dom.js';
import { showCatalog } from './catalog.js';
import { showDetails } from './details.js';

let main;
let section;
let setActiveNav;
let ctx;

export function setupHome(targetMain, targetSection, onActiveNav, ctxExt) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
    ctx = ctxExt;
}

//---- get elements ------------------------------------------------------------
const recentRecipes = document.querySelector('.recent-recipes');
const catalogLink = document.querySelector('#home-catalog');

//---- attach event listeners --------------------------------------------------
catalogLink.addEventListener('click', onCatalogLinkClick);

export async function showHome() {
    setActiveNav('homeLink');
    recentRecipes.innerHTML = 'Loading&hellip;';
    main.innerHTML = '';
    main.appendChild(section);

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

    //---- redirect to dashboard page ------------------------------------------
    showCatalog();
};

//---- create card for recipe --------------------------------------------------
function createRecipePreview(recipe) {
    return e('article', { className: 'recent', onClick: () => showDetails(recipe._id) },
        e('div', { className: 'recent-preview' }, e('img', { src: recipe.img })),
        e('div', { className: 'recent-title' }, e('p', {}, recipe.name))
    );
}

function createSpacer() {
    return e('div', { className: 'recent-space' });
}