import { html } from './../node_modules/lit-html/lit-html.js';
import { addForm } from './create.js';
import { editForm } from './update.js';

const tableTemplate = (ctx) => html`
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${ctx.books.map((b) => rowTemplate(ctx, b))}
        </tbody>
    </table>
`;

const rowTemplate = (ctx, book) => html`
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button data-id=${book._id} @click=${()=> ctx.edit(book)}>Edit</button>
        <button data-id=${book._id} @click=${()=> ctx.delete(book)}>Delete</button>
    </td>
</tr>
`;

const addFormTemplate = (form) => html`
<form @submit=${form.submitHandler} id=${form.id}>
    ${form.type == 'edit'
            ? html`<input type="hidden" name="id">`
            : ''}
    <h3>${form.title}</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value=${form.submitText}>
</form>
`;

const editFormTemplate = (form, book) => html`
<form @submit=${form.submitHandler} id=${form.id}>
    ${form.type == 'edit'
            ? html`<input type="hidden" name="id" .value=${book._id}>`
            : ''}
    <h3>${form.title}</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book.title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book.author}>
    <input type="submit" value=${form.submitText}>
</form>
`;

const layoutTemplate = (ctx) => html`
    <button @click=${ctx.load} id="loadBooks">LOAD ALL BOOKS</button>
    ${tableTemplate(ctx)}
    ${ctx.book ? editFormTemplate(editForm, ctx.book) : addFormTemplate(addForm)}
`;

export { layoutTemplate }