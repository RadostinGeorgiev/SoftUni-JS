const url = 'http://localhost:3030/jsonstore/collections/books';

//---- get elements ------------------------------------------------------------
const tableBody = document.querySelector('tbody');
const form = document.querySelector('form');
const inputs = {
	title: document.querySelector('[name="title"]'),
	author: document.querySelector('[name="author"]'),
};

//---- attach button events ----------------------------------------------------
document.getElementById('loadBooks').addEventListener('click', onLoadBooksClick);
document.querySelector('form button').addEventListener('click', onSubmitClick);

//---- init page ---------------------------------------------------------------
tableBody.replaceChildren();

//---- GET records  & fill all data in the table -------------------------------
async function onLoadBooksClick() {
	try {
		const data = await getRequest();

		const result = Object.keys(data)
			.map(key => createRow(key, data[key]));
		tableBody.replaceChildren(...result);

		form.reset();
	} catch (error) {
		alert(error.message);
	}
}

function onSubmitClick(event) {
	event.preventDefault();

	const book = {
		title: inputs.title.value,
		author: inputs.author.value,
	};

	if (Object.values(book).every((x) => x.value != '')) {
		if (event.target.textContent == 'Submit') {
			postRequest(book);
		} else {
			const id = sessionStorage.getItem('selectedId');
			putRequest(book, id);

			event.target.textContent = 'Submit';
			document.querySelector('form h3').textContent = 'Form';
			sessionStorage.removeItem('selectedId');
		}

		tableBody.appendChild(createRow(book));
		onLoadBooksClick();

		inputs.title.value = '';
		inputs.author.value = '';
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
		// ---- change labels of the the form --------------------------------------
		document.querySelector('form h3').textContent = 'Edit Form';
		document.querySelector('form button').textContent = 'Save';

		const row = target.parentElement.parentElement;
		const cells = row.getElementsByTagName('td');

		inputs.title.value = cells[0].textContent;
		inputs.author.value = cells[1].textContent;
	}

	// ---- delete record ----------------------------------------------------------
	function onDeleteClick({ target }) {
		const row = target.parentElement.parentElement;
		
		try {
			deleteRequest(row.dataset.id);
		} catch (error) {
			alert(error.message);
		}

		row.remove();
	}

	return row;
}

//---- GET records ---------------------------------------------------------
async function getRequest() {
	try {
		const data = await makeRequest(url);

		return data;
	} catch (error) {
		alert(error.message);
	}
}

//---- GET record by Id ----------------------------------------------------
async function getRequestById(id) {
	try {
		const data = await makeRequest(url + `/${id}`);

		return data;
	} catch (error) {
		alert(error.message);
	}
}

//---- POST record ---------------------------------------------------------
async function postRequest(data) {
	const options = {
		method: 'POST',
		body: JSON.stringify(data),
	};

	try {
		const result = await makeRequest(url, options);

		return result;
	} catch (error) {
		alert(error.message);
	}
}

//---- PUT record ----------------------------------------------------------
async function putRequest(data, id) {
	const options = {
		method: 'PUT',
		body: JSON.stringify(data),
	};

	try {
		const result = await makeRequest(url + `/${id}`, options);

		return result;
	} catch (error) {
		alert(error.message);
	}
}

//---- DELETE record -------------------------------------------------------
async function deleteRequest(id) {
	const options = {
		method: 'DELETE',
	};

	try {
		const result = await makeRequest(url + `/${id}`, options);

		return result;
	} catch (error) {
		alert(error.message);
	}
}

/**
 * --- function CRUD requests ---------------------------------------------------
 * --- return data or error as promise
 * @param {string} url
 * @param {object} options
 * @returns {promise}
 */
async function makeRequest(url, options) {
	if (options && options.body) {
		Object.assign(options, {
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const response = await fetch(url, options);

	if (response.status != 200) {
		const error = await response.json();
		alert(error.message);

		throw new Error(error.message);
	}

	const data = await response.json();

	return data;
}

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
