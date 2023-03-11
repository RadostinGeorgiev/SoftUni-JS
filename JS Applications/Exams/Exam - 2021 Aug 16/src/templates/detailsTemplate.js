import { html } from '../lib.js';

export const detailsTemplate = (item, deleteHandler, isLogged, isOwner, comments, commentHandler) => html`
    <!--Details Page-->
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">

            <div class="game-header">
                <img class="game-img" src=${item.imageUrl} />
                <h1>${item.title}</h1>
                <span class="levels">MaxLevel: ${item.maxLevel}</span>
                <p class="type">${item.category}</p>
            </div>

            <p class="text">${item.summary}
            </p>

            <!-- Bonus ( for Guests and Users ) -->
            <div class="details-comments">
                <h2>Comments:</h2>
                <ul>
                    <!-- list all comments for current game (If any) -->
                    ${comments.length > 0 
                        ? comments.map(commentTemplate) 
                        : html`
                            <!-- Display paragraph: If there are no games in the database -->
                            <p class="no-comment">No comments.</p>
                        `}
                </ul>
            </div>

            <!-- Edit/Delete buttons ( Only for creator of this game )  -->
            ${isOwner 
            ? html`
                <div class="buttons">
                    <a href="/edit/${item._id}" class="button">Edit</a>
                    <a href="javascript:void(0);" class="button" @click=${deleteHandler}>Delete</a>
                </div>
            `
            : ''}

        <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            ${isLogged && !isOwner
            ? html`
            <article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${commentHandler} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>`
            : ''}

    </section>`;

export const commentTemplate = (item) => html`
                    <li class="comment">
                        <p>Content: ${item.comment}</p>
                    </li>
`;