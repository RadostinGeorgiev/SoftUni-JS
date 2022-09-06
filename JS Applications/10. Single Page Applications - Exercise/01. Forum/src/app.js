import { showHome } from "./home.js";

const postsUrl = '/jsonstore/collections/myboard/posts';
const commentsUrl = '/jsonstore/collections/myboard/comments';

document.addEventListener('DOMContentLoaded', onLoad);
document.querySelector('a').addEventListener('click', onHomeClick);

function onLoad() {
    showHome();
}

function onHomeClick() {
    showHome();
}

export { postsUrl, commentsUrl }