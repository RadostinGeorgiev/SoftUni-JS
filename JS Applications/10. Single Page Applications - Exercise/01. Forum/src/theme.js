import { commentsUrl, postsUrl } from "./app.js";
import { get, post } from "./requests.js";
import { createCommentsHeader, createCommentPost, createTopicTitle, createCommentsBody } from "./templates.js";
import { clearFields } from "./utils.js";

const container = document.querySelector('.container');
const section = document.querySelector('.theme-content');
const theme = document.querySelector('.theme-name-wrapper');
const comments = document.querySelector('.comment');
const form = document.querySelector('.answer-comment form');
const postButton = document.querySelector('.answer-comment button');

postButton.addEventListener('click', onPostButtonClick);

section.remove();
let themeId;

async function showTheme(id) {
    themeId = id;
    container.replaceChildren(section);

    const data = await get(postsUrl + `/${id}`);

    let result = createTopicTitle(data);
    theme.replaceChildren(result);

    const header = createCommentsHeader(data);
    comments.replaceChildren(header);

    const body = createCommentsBody();
    comments.appendChild(body);

    loadComments();
}

async function loadComments() {
    const userComments = document.querySelector('.topic-name-wrapper');

    try {
        const data = await get(commentsUrl);

        const result = Object.values(data)
            .filter(x => x.postId == themeId)
            .map(createCommentPost);

        userComments.replaceChildren(...result);
    } catch (error) {
        alert(error.message);
    }
}

async function onPostButtonClick(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const fields = Object.fromEntries(formData.entries());

    const data = {
        text: fields.postText,
        username: fields.username,
        postId: themeId,
        time: new Date(),
    };

    try {
        await post(commentsUrl, data);
        
        clearFields(form);
        loadComments();
    } catch (err) {
        console.error(err.message);
    }
}

export { showTheme }