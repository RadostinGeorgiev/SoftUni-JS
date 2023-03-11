import { html } from '../lib.js';

export const editTemplate = (data, editHandler) =>
    html`
        <!-- Edit Page ( Only for the creator )-->
        <section id="edit-page" class="auth">
            <form @submit=${editHandler} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value="" .value=${data.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" value="" .value=${data.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value="" .value=${data.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value="" .value=${data.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value=${data.summary}></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`;