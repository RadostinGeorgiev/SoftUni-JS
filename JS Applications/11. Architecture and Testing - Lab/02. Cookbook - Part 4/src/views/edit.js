import { getUserData } from '../api/authentication.js';
import { editItemById, getItemById } from '../api/data.js';
import { showDetails } from './details.js';

let main;
let section;
let setActiveNav;
let ctx;
let recipeId;

export function setupEdit(targetMain, targetSection, onActiveNav, ctxExt) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
    ctx = ctxExt;

    //---- get elements ------------------------------------------------------------
    const form = targetSection.querySelector('form');

    //---- attach event listeners --------------------------------------------------
    form.addEventListener('submit', onSubmit);

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
        showDetails(recipeId);
    }
}


export async function showEdit(id) {
    setActiveNav();
    main.innerHTML = '';
    main.appendChild(section);

    recipeId = id;
    const recipe = await getItemById(recipeId);

    section.querySelector('[name="name"]').value = recipe.name;
    section.querySelector('[name="img"]').value = recipe.img;
    section.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
    section.querySelector('[name="steps"]').value = recipe.steps.join('\n');
}