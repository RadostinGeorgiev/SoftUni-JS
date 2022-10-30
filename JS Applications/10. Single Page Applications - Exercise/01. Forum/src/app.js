import { showHome } from "./home.js";

const endpoints = {
    posts: '/jsonstore/collections/myboard/posts',
    comments: '/jsonstore/collections/myboard/comments'
}

//---- attach event listeners --------------------------------------------------
document.addEventListener('DOMContentLoaded', onLoad);
document.querySelector('a').addEventListener('click', onHomeClick);

function onLoad() {
    showHome();
}

function onHomeClick() {
    showHome();
}

export { endpoints }