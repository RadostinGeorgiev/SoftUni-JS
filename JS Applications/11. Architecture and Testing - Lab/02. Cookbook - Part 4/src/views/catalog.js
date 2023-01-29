import { getAllItems } from '../api/data.js';
import { e } from '../dom.js';
import { showDetails } from './details.js';

//---- create card for recipe --------------------------------------------------
function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: () => showDetails(recipe._id) },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;
}

let main;
let section;
let setActiveNav;

export function setupCatalog(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
}

//---- read all recipes & fill page with recipes cards -------------------------
export async function showCatalog() {
    setActiveNav('catalogLink');
    section.innerHTML = 'Loading&hellip;';
    main.innerHTML = '';
    main.appendChild(section);

    const recipes = await getAllItems();
    const cards = recipes.map(createRecipePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));
    section.innerHTML = '';
    section.appendChild(fragment);
}