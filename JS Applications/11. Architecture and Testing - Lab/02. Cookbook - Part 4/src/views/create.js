import { getUserData } from '../api/authentication.js';
import { createItem } from '../api/data.js';

let ctx;

//---- get elements ------------------------------------------------------------
const section = document.getElementById('create');
const form = section.querySelector('form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

export function showCreate(ctxExt) {
    ctx = ctxExt;
    ctx.setActiveNav('createLink');
    ctx.showSection(section);
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

    const response = await createItem(data);

    form.reset();
    //---- redirect to details page -------------------------------------------
    ctx.showView('details', response._id);
}