function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', fillInfo);

    let data;
    const select = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    //---- get posts & fill in select dropdown list on click 'Load Posts' button----------------
    async function loadPosts() {
        data = await getPosts();
        Object.keys(data)
            .forEach(id => createElement('option', data[id].title.toUpperCase(), select, 'value', id));
    }

    //---- get comments & fill all info --------------------------------------------------------------
    async function fillInfo() {
        //---- get selected Id from dropdown list & GET posts-----------------------------------------
        const _id = select.value;
        const { body, id, title } = data[_id];

        //---- fill post info --------------------------------------------------------------------------
        postTitle.textContent = title;
        postBody.textContent = body;
        postComments.replaceChildren();

        //---- GET & fill comments ---------------------------------------------------------------------
        const comments = await getComments();
        Object.values(comments).filter(el => el.postId === id)
            .forEach(el => createElement('li', el.text, postComments));
    };
}

//---- GET all posts ---------------------------------------------------------------------------
function getPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';
    return getRequest(url)
}

//---- GET all comments ---------------------------------------------------------------------------
function getComments() {
    const url = `http://localhost:3030/jsonstore/blog/comments/`;
    return getRequest(url)
}

/**
 * --- function for create GetRequest --------------------------------------------
 * @param {string} url
 * @returns {promise}
 */
async function getRequest(url) {
    try {
        const response = await fetch(url);

        if (response.status != 200) {
            throw new Error('Error');
        }

        return response.json();
    } catch (error) {
        alert(error.message);
    }
}

/**
 * --- function for creation DOM elements ---------------------------------------
 * @param {string} type
 * @param {string} value
 * @param {element} parent
 * @param {string} attr
 * @param {string} attrValue
 * @param {boolean} disabled
 * @returns HTML element
 */
function createElement(type, value, parent, attr, attrValue, disabled) {
    const element = document.createElement(type);

    if (type == 'input') {
        element.setAttribute('type', 'text');
    }
    if (value) {
        element.textContent = value;
    }
    if (attr) {
        element.setAttribute(attr, attrValue);
    }
    if (parent) {
        parent.appendChild(element);
    }
    if (disabled) {
        element.disabled = disabled;
    }

    return element;
}

attachEvents();