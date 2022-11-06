import { recipesUrl, onLoad } from "./app.js";
import { get as getRecipes, put } from "./requests.js";

//---- get elements ------------------------------------------------------------
const main = document.querySelector('main');
const section = document.getElementById('edit');
const form = document.querySelector('#edit form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

section.remove();
let recipeId;

async function showEdit(id) {
    main.replaceChildren(section);

    const recipe = await getRecipes(recipesUrl + `/${id}`);

    form.querySelector('[name="name"]').value = recipe.name;
    form.querySelector('[name="img"]').value = recipe.img;
    form.querySelector('[name="ingredients"]').value = recipe.ingredients.join('\n');
    form.querySelector('[name="steps"]').value = recipe.steps.join('\n');

    recipeId = id;
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData.entries());

    const data = {
        name: fields.name,
        img: fields.img,
        ingredients: fields.ingredients.split('\n').map(l => l.trim()).filter(l => l != ''),
        steps: fields.steps.split('\n').map(l => l.trim()).filter(l => l != '')
    };

    const userData = sessionStorage.getItem('userData');
    if (userData == null) {
        onLoad();
    }

    try {
        await put(recipesUrl + `/${recipeId}`, data);
        

        onLoad();
    } catch (err) {
        alert(err.message);
    }
}

export { showEdit }