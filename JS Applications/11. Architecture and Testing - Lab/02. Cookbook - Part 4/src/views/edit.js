import { getUserData } from '../api/authentication.js';
import { editItemById, getItemById } from '../api/data.js';

let ctx;
let recipeId;

//---- get elements ------------------------------------------------------------
const section = document.getElementById('edit');
const form = section.querySelector('form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

export async function showEdit(ctxExt, id) {
    ctx = ctxExt;
    ctx.setActiveNav();
    ctx.showSection(section);

    recipeId = id;
    const recipe = await getItemById(recipeId);

    section.querySelector('[name="name"]').value = recipe.name;
    section.querySelector('[name="img"]').value = recipe.img;
    section.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
    section.querySelector('[name="steps"]').value = recipe.steps.join('\n');
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
        name: formData.get('name').trim(),
        img: formData.get('img').trim(),
        ingredients: formData.get('ingredients').trim().split('\n').map(l => l.trim()).filter(l => l != ''),
        steps: formData.get('steps').trim().split('\n').map(l => l.trim()).filter(l => l != '')
    };

    const userData = getUserData();
    if (userData == null) {
        return alert('You\'re not logged in!');
    }

    await editItemById(data, recipeId);

    form.reset();
    //---- redirect to details page -------------------------------------------
    ctx.showView('details', recipeId);
}