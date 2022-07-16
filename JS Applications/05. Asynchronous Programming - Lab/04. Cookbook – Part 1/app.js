const baseUrl = 'http://localhost:3030/jsonstore/cookbook';

window.addEventListener('load', () => {
	document.querySelector('main p').textContent = '';

	getRecipes();
});

function getRecipes() {
	fetch(baseUrl + '/recipes')
		.then((response) => response.json())
		.then((data) => Object.values(data).forEach((r) => createRecipePreview(r)))
		.catch((error) => returnError(error.status, error.statusText));
}

function returnError(error) {
	document.querySelector(
		'main p'
	).textContent = `${error.status} ${error.statusText}`;
}

function getRecipesInfoById(id) {
	return fetch(baseUrl + `/details/${id}`)
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => returnError(error.status, error.statusText));
}

function createRecipePreview(recipe) {
	const { _id, name, img } = recipe;

	const main = document.querySelector('main');

	const article = createElement('article', '', main, 'class', 'preview');
	const div = createElement('div', '', article, 'class', 'title');
	createElement('h2', `${name}`, div);

	const div2 = createElement('div', '', article, 'class', `small`);
	createElement('img', '', div2, 'src', `${img}`);

	article.addEventListener('click', () => {
		getRecipesInfoById(_id).then((res) =>
			article.replaceWith(createRecipeCard(res))
		);
	});
}

function createRecipeCard(recipe) {
	const { _id, name, img, steps, ingredients } = recipe;

	const article = createElement('article');
	createElement('h2', `${name}`, article);
	const divBand = createElement('div', '', article, 'class', `band`);

    const divThumb = createElement('div', '', divBand, 'class', `thumb`);
	createElement('img', '', divThumb, 'src', `${img}`);

	const divIngredients = createElement('div', '', divBand, 'class', `ingredients`);
	createElement('h3', 'Ingredients:', divIngredients);
    const ul = createElement('ul', '', divIngredients);
    ingredients.forEach(i => createElement('li', i, ul));
    
    const divDescription = createElement('div', '', article, 'class', 'description');
    createElement('h3', 'Preparation:', divDescription);
    steps.forEach(s => createElement('p', s, divDescription));

	return article;
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