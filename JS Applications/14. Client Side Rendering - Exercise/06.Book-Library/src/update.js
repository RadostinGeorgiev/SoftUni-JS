import { editItemById } from './data.js';

const editForm = {
    id: 'edit-form',
    // class: 'hidden',
    type: 'edit',
    title: 'Edit book',
    submitText: 'Save',
    submitHandler: onSubmit
};
let ctx = null;

function initUpdate(ctxExt) {
    ctx = ctxExt;
}

async function onSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);

    const book = {
        _id: formData.get('id'),
        title: formData.get('title').trim(),
        author: formData.get('author').trim()
    };

    await editItemById(book._id, book);

    form.reset();
    delete ctx.book;
    ctx.load();
}

export { initUpdate, editForm }