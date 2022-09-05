import { recipesUrl, onLoad, } from "./app.js";
import { post } from "./requests.js";
import { clearFields } from "./utils.js";

const main = document.querySelector('main');
const section = document.getElementById('create');

const form = document.querySelector('#create form');
form.addEventListener('submit', onSubmit);

section.remove();

function showCreate() {
    clearFields(form);
    main.replaceChildren(section);
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
        await post(recipesUrl, data);

        onLoad();
    } catch (err) {
        console.error(err.message);
    }
}

export { showCreate }