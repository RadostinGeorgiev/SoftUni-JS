function attachEvents() {
    //---- get posts & fill in select dropdown list on click 'Load Posts' button----------------
    document.getElementById('btnLoadPosts').addEventListener('click', async () => {
        const posts = await getPosts();
        Object.values(posts).forEach(el => createOption(el));
    });
}

//---- GET all posts ---------------------------------------------------------------------------
function getPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';
    return getRequest(url)
}

//---- GET post only with selected Id ----------------------------------------------------------
function getPostsById(id) {
    const url = `http://localhost:3030/jsonstore/blog/posts/${id}`;
    return getRequest(url)
}

//---- GET all comments ---------------------------------------------------------------------------
function getComments() {
    const url = `http://localhost:3030/jsonstore/blog/comments/`;
    return getRequest(url)
}

//---- fill posts in select dropdown list --------------------------------------------------------
function createOption(posts) {
    const { body, id, title } = posts;

    const postsElement = document.getElementById('posts');
    createElement('option', title.toUpperCase(), postsElement, 'value', id);

    //---- attach button event on 'View' button---------------------------------------------------
    document.getElementById('btnViewPost').addEventListener('click', fillInfo);
}

//---- get comments & fill all info --------------------------------------------------------------
async function fillInfo() {
    //---- get selected Id from dropdown list & GET posts-----------------------------------------
    const _id = document.getElementById('posts').value;
    const { body, id, title } = await getPostsById(_id);

    //---- fill post info --------------------------------------------------------------------------
    document.getElementById('post-title').textContent = title;
    document.getElementById('post-body').textContent = body;
    const commentsElement = document.getElementById('post-comments');
    commentsElement.replaceChildren();

    //---- GET & fill comments ---------------------------------------------------------------------
    const comments = await getComments();
    Object.values(comments).filter(el => el.postId === id)
        .forEach(el => createElement('li', el.text, commentsElement));
};


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