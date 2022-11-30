import { createItem } from './data.js';

const addForm = {
    id: 'add-form',
    type: 'add',
    title: 'Add book',
    submitText: 'Submit',
    submitHandler: onSubmit
};
let ctx = null;

function initCreate(ctxExt) {
    ctx = ctxExt;
}

async function onSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const book = {
        title: formData.get('title').trim(),
        author: formData.get('author').trim()
    };

    await createItem(book);

    form.reset();
    ctx.load();
}

export { initCreate, addForm }