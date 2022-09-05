import { recipesUrl } from "./app.js";
import { showEdit } from "./edit.js";
import { del, getRecipes } from "./requests.js";
import { e } from "./utils.js";

const main = document.querySelector('main');
const section = document.getElementById('catalog');
section.remove();

async function showCatalog() {
    const recipes = await getRecipes(recipesUrl);
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    main.appendChild(section);

    const fragment = document.createDocumentFragment();
    cards.forEach(c => fragment.appendChild(c));

    main.replaceChildren(fragment);
}

function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;

    async function toggleCard() {
        const fullRecipe = await getRecipes(recipesUrl+`/${recipe._id}`);
        result.replaceWith(createRecipeCard(fullRecipe));
    }
}

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

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null && userData.id == recipe._ownerId) {
        result.appendChild(e('div', { className: 'controls' },
            e('button', { onClick: () => showEdit(recipe._id) }, '\u270E Edit'),
            e('button', { onClick: onDelete }, '\u2716 Delete'),
        ));
    }

    return result;

    function onDelete() {
        const confirmed = confirm(`Are you sure you want to delete ${recipe.name}?`);

        if (confirmed) {
            del(recipesUrl+`/${recipe._id}`);
            showCatalog();
        }
    }
}

export { showCatalog }