const url = 'http://localhost:3030/jsonstore/collections/students';
//---- get elements ------------------------------------------------------------
const tableBody = document.querySelector('tbody');
const form = document.getElementById('form');

//---- attach button events ----------------------------------------------------
document.getElementById('submit').addEventListener('click', onSubmitClick);

//---- GET records  & fill all data in the table -------------------------------
window.addEventListener('load', async () => {
	const data = await getRequest();
	data.map((x) => createRow(x)).forEach((x) => tableBody.appendChild(x));
});

//---- read form fields & create record for the student ------------------------
function onSubmitClick(event) {
	event.preventDefault();

	try {
		const formData = new FormData(form);
		validateFormData(formData);

		// ---- create record for the student-------------------------------
		const student = {
			firstName: formData.get('firstName'),
			lastName: formData.get('lastName'),
			facultyNumber: formData.get('facultyNumber'),
			grade: formData.get('grade'),
		};
		postRequest(student);

		// ---- display the new row in the table & clear input form fields--
		tableBody.appendChild(createRow(student));
		form.reset();
	} catch (error) {
		alert(error.message);
	}
}

function validateFormData(formData) {
	const data = Object.fromEntries(formData);

	// ---- check for empty fields -----------------------------------------
	if (Object.values(data).some((x) => x == '')) {
		throw new Error('Please, fill all values!');
	}

	// ---- read form fields only valid data------------------------------------
	const nameRegex = /(\w+)/;
	const facultyNumberRegex = /\d{11}/;
	const gradeRegex = /^\d+[.]\d{1,2}/;

	if (!nameRegex.test(data.firstName)) {
		throw new Error('Please fill correct First Name');
	}
	if (!nameRegex.test(data.firstName)) {
		throw new Error('Please fill correct Last Name');
	}
	if (!facultyNumberRegex.test(data.facultyNumber)) {
		throw new Error('Faculty number should consist 11 digits');
	}
	if (!gradeRegex.test(data.grade)) {
		throw new Error('Grade should be 2 ... 6');
	}
}

//---- create row in the table with a student data -----------------------------
function createRow(data) {
	const row = createElement('tr');

	createElement('td', data.firstName, row);
	createElement('td', data.lastName, row);
	createElement('td', data.facultyNumber, row);
	createElement('td', data.grade, row);

	return row;
}

//---- GET records ---------------------------------------------------------
async function getRequest() {
	try {
		const data = await makeRequest(url);

		return Object.values(data);
	} catch (error) {
		alert(error.message);
	}
}

//---- POST records --------------------------------------------------------
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
 * --- function for creation DOM elements ---------------------------------------
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
