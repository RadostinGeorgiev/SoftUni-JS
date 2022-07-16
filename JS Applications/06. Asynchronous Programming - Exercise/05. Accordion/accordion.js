async function solution() {
	//---- get headers info --------------------------------------------------
	const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
	const data = await getRequest(url);

	Object.values(data).forEach((el) => displayHeadsInfo(el));
}

//---- create elements & display headers info --------------------------------
function displayHeadsInfo(info) {
	const { _id, title } = info;

	const main = document.querySelector('#main');
	const divAccordion = createElement('div', '', main, 'class', 'accordion');

	const divHead = createElement('div', '', divAccordion, 'class', 'head');
	createElement('span', title, divHead);

	const button = createElement('button', 'More', divHead, 'class', 'button');
	button.setAttribute('id', _id);

	//---- attach button event -----------------------------------------------
	button.addEventListener('click', getMoreInfo);
}

//---- get more info by Id & toggle display/hide -----------------------------
async function getMoreInfo({ target }) {
	//---- get elements of selected header -----------------------------------
	const button = target;
	const divAccordion = target.parentElement.parentElement;
	//---- check if more info was loaded connected div should be created -----
	let divExtra = divAccordion.querySelector('.extra');

	//---- get more info by Id -----------------------------------------------
	if (!divExtra) {
		const url = `http://localhost:3030/jsonstore/advanced/articles/details/${button.id}`;
		const { _id, title, content } = await getRequest(url);

		//---- create connected div & p -----------------------------------------------
		divExtra = createElement('div', '', divAccordion, 'class', 'extra');
		createElement('p', content, divExtra);
	}

	//---- toggle button label & div display --------------------------------------
	if (button.textContent === 'More') {
		button.textContent = 'Less';
		divExtra.style.display = 'block';
	} else {
		button.textContent = 'More';
		divExtra.style.display = 'none';
	}
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

solution();
