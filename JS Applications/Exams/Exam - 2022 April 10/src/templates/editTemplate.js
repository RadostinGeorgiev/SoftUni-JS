import { html } from '../lib.js';

export const editTemplate = (data, editHandler) =>
    html`
        <!-- Edit Page (Only for logged-in users) -->
        <section id="edit-page" class="auth">
            <form @submit=${editHandler} id="edit">
                <h1 class="title">Edit Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title" value="" .value=${data.title}>
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description" value="" .value=${data.description}>
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl" value="" .value=${data.imageUrl}>
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address" value="" .value=${data.address}>
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone" value="" .value=${data.phone}>
                </article>

                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>
`;