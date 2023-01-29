import { getUserId } from '../api/authentication.js';
import { deleteItemById, getItemById } from '../api/data.js';
import { e } from '../dom.js';
import { showEdit } from './edit.js';

//---- create card for recipe details ------------------------------------------
function createRecipeCard(recipe) {
    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
    );

//---- checks if the user is the creator of the recipe & show edit and delete buttons -
const userId = getUserId();
    if (userId != null && recipe._ownerId == userId) {
        result.appendChild(e('div', { className: 'controls' },
            e('button', { onClick: () => showEdit(recipe._id) }, '\u270E Edit'),
            e('button', { onClick: onDelete }, '\u2716 Delete'),
        ));
    }

    return result;

    function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${recipe.name}?`);
        if (confirmed) {
            deleteItemById(recipe._id);
            section.innerHTML = '';
            section.appendChild(e('article', {}, e('h2', {}, 'Recipe deleted')));
        }
    }
}

let main;
let section;
let setActiveNav;
let ctx;

export function setupDetails(targetMain, targetSection, onActiveNav, ctxExt) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
    ctx = ctxExt;
}

export async function showDetails(id) {
    setActiveNav();
    section.innerHTML = 'Loading&hellip;';
    main.innerHTML = '';
    main.appendChild(section);

    const recipe = await getItemById(id);
    section.innerHTML = '';
    section.appendChild(createRecipeCard(recipe));
}