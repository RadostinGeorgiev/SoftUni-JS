import { deleteItemById, getAllItems } from './data.js';

let ctx = null;

function initCatalog(ctxExt) {
    ctx = ctxExt;
}

async function loadAllBooks() {
    ctx.books = await getAllItems();
    ctx.update();
}

function editBook(book) {
    ctx.book = book;
    ctx.load();
}

async function deleteBook(book) {
    await deleteItemById(book._id);
    ctx.load();
}

export { initCatalog, loadAllBooks, editBook, deleteBook }