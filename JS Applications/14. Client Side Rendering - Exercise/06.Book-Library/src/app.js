import { render } from './../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './templates.js';
import { initCatalog, loadAllBooks, deleteBook, editBook } from './catalog.js';
import { initCreate } from './create.js';
import { initUpdate } from './update.js';

//---- init page ---------------------------------------------------------------   
const root = document.body;

const ctx = {
    books: [],
    load: loadAllBooks,
    edit: editBook,
    delete: deleteBook,
    update: update
};

init();

async function init() {
    update([]);
    initCatalog(ctx);
    initCreate(ctx);
    initUpdate(ctx);
};

function update() {
    render(layoutTemplate(ctx), root);
}