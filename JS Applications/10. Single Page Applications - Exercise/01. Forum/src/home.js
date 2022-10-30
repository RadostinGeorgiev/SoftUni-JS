import { endpoints } from "./app.js";
import { get, post } from "./requests.js";
import { createTopicHome } from "./templates.js";
import { showTheme } from "./theme.js";

//---- get elements ------------------------------------------------------------
const container = document.querySelector('.container');
const main = document.querySelector('main');

const topics = document.querySelector('.topic-container');
const form = document.querySelector('.new-topic-border form');
const cancelButton = document.querySelector('.cancel');
const postButton = document.querySelector('.public');

//---- attach event listeners --------------------------------------------------
cancelButton.addEventListener('click', onCancelClick);
postButton.addEventListener('click', onPostClick);

function showHome() {
    container.replaceChildren(main);

    loadTopics();
}

async function loadTopics() {
    try {
        const data = await get(endpoints.posts);

        const result = Object.values(data).map(x => {
            const topic = createTopicHome(x);
            topic.addEventListener('click', onTopicClick);
            return topic;
        });

        topics.replaceChildren(...result);
    } catch (error) {
        alert(error.message);
    }
}

function onTopicClick(event) {
    showTheme(event.currentTarget.id);
}

function onCancelClick(event) {
    event.preventDefault();
    form.reset();
}

async function onPostClick(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const fields = Object.fromEntries(formData.entries());

    const data = {
        title: fields.topicName,
        username: fields.username,
        content: fields.postText,
        time: new Date(),
    };

    try {
        await post(endpoints.posts, data);

        form.reset();
        showHome();
    } catch (err) {
        console.error(err.message);
    }
}

export { showHome, loadTopics }