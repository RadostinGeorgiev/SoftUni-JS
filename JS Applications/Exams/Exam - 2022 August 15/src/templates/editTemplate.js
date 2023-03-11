import { html } from '../lib.js';

export const editTemplate = (data, editHandler) =>
    html`
<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${editHandler} class="edit-form">
            <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${data.brand} />
            <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${data.model} />
            <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${data.imageUrl} />
            <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${data.release} />
            <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${data.designer} />
            <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${data.value} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;