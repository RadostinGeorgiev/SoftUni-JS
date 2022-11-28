import { host } from './solution.js';

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

	try {
		const response = await fetch(host + url, options);

		if (response.ok !== true) {
			const error = await response.json();
			throw new Error(error.message);
		}

		if (response.status == 204) {
			return response;
		} else {
			return response.json();
		}

	} catch (error) {
		alert(error.message);
		throw error;
	}

}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export { get, post, put, del }