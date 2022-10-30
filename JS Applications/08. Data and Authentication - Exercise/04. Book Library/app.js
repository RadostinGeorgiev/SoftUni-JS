const url = 'http://localhost:3030/jsonstore/collections/books';

//---- get elements ------------------------------------------------------------
const tableBody = document.querySelector('tbody');
const form = document.querySelector('form');
const inputs = {
	title: document.querySelector('[name="title"]'),
	author: document.querySelector('[name="author"]'),
};
const buttons = {
	loadAll: document.getElementById('loadBooks'),
	submit: form.querySelector('button')
};

//---- attach button events ----------------------------------------------------
buttons.loadAll.addEventListener('click', onLoadBooksClick);
buttons.submit.addEventListener('click', onSubmitClick);

//---- init page ---------------------------------------------------------------
tableBody.replaceChildren();

//---- GET records  & fill all data in the table -------------------------------
async function onLoadBooksClick() {
	try {
		const data = await get(url);

		const result = Object.keys(data).map(key => createRow(key, data[key]));
		tableBody.replaceChildren(...result);

		form.reset();
	} catch (error) {
		alert(error.message);
	}
}

async function onSubmitClick(event) {
	event.preventDefault();

	const book = {
		author: inputs.author.value,
		title: inputs.title.value
	};

	let id;
	if (Object.values(book).every((x) => x.value != '')) {
		if (event.target.textContent == 'Submit') {
			//---- Create Book record ------------------------------------------
			const result = await post(url, book);
			id = result._id;
		} else {
			//---- Edit Book record --------------------------------------------
			const id = form.dataset.id;
			const result = await put(url + `/${id}`, book);

			event.target.textContent = 'Submit';
			form.querySelector('h3').textContent = 'Form';
		}

		onLoadBooksClick();
	} else {
		alert('Please, fill all values!');
	}
}

//---- create row in the table with a student data -----------------------------
function createRow(id, data) {
	const row = createElement('tr');
	row.dataset.id = id;

	createElement('td', data.title, row);
	createElement('td', data.author, row);

	const cellAction = createElement('td', '', row);

	const buttonEdit = createElement('button', 'Edit', cellAction);
	buttonEdit.addEventListener('click', onEditClick);

	const buttonDelete = createElement('button', 'Delete', cellAction);
	buttonDelete.addEventListener('click', onDeleteClick);

	// ---- load record for the edited row & fill form fields ----------------------
	function onEditClick({ target }) {
		const row = target.parentElement.parentElement;
		const cells = row.getElementsByTagName('td');

		// ---- change labels of the the form --------------------------------------
		form.querySelector('h3').textContent = 'Edit FORM';
		form.querySelector('button').textContent = 'Save';
		form.dataset.id = row.dataset.id;

		inputs.title.value = cells[0].textContent;
		inputs.author.value = cells[1].textContent;
	}

	// ---- delete record ----------------------------------------------------------
	async function onDeleteClick({ target }) {
		const row = target.parentElement.parentElement;

		try {
			const result = await del(url + `/${row.dataset.id}`);
		} catch (error) {
			alert(error.message);
		}

		row.remove();
	}

	return row;
}

/**
 * --- function CRUD requests ---------------------------------------------------
 * --- return data or error as promise
 * @param {string} url
 * @param {object} options
 * @returns {promise}
 */
async function request(method, url, data) {
	const options = {
		method: method,
		headers: {}
	};

	if (data != undefined) {
		options.headers['Content-Type'] = 'application/json';
		options.body = JSON.stringify(data);
	}

	const response = await fetch(url, options);

	if (response.ok != true) {
		const error = await response.json();
		alert(error.message);

		throw new Error(error.message);
	}

	return response.json();
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

/**
 * --- createElements -------------------------------------------
 * @param {*} type: string
 * @param {*} value: string
 * @param {*} parent: string
 * @param {*} attr: string
 * @returns
 */
function createElement(type, value, parent, attr) {
	const element = document.createElement(type);

	attr ? element.setAttribute(attr, value) : (element.textContent = value);

	parent ? parent.appendChild(element) : null;

	return element;
}
