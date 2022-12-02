import { createItem } from "./data.js";
import { isEmptyField } from "./utils.js";

//---- get elements ------------------------------------------------------------
const section = document.getElementById('createPage');
const form = section.querySelector('form');

//---- attach event listeners --------------------------------------------------
form.addEventListener('submit', onSubmit);

section.remove();

let ctx = null;

export function showCreatePage(ctxExt) {
    ctx = ctxExt;
    ctx.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();

    //---- checking for empty fields -------------------------------------------
    if (isEmptyField(form)) {
        return alert('Please, fill all fields');
    }

    //---- read form fields ----------------------------------------------------
    const formData = new FormData(event.target);

    const data = {
        title: formData.get('title').trim(),
        description: formData.get('description').trim(),
        img: formData.get('imageURL').trim()
    }

    if (data.title.length < 6) {
        return alert('The title should be at least 6 characters long');
    }
    if (data.description.length < 10) {
        return alert('The description should be at least 10 characters long');
    }
    if (data.img.length < 5) {
        return alert('The image should be at least 5 characters long');
    }

    await createItem(data);

    form.reset();
    ctx.updateNav();

    //---- redirect to dashboard page ------------------------------------------
    ctx.goTo('dashboard');
}