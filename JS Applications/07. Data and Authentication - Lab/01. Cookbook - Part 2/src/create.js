document.querySelector('form').addEventListener('submit', onSubmit);
const url = 'http://localhost:3030/data/recipes';

async function onSubmit(event) {
	event.preventDefault();

    const accessToken = sessionStorage.getItem('accessToken'); 
    if (!accessToken) {
        alert('Please login!');
        window.location = 'login.html';
        return;
    }
	const formData = new FormData(event.target);

	const recipe = {
		name: formData.get('name'),
		imgUrl: formData.get('img'),
		ingredients: separateLines(formData.get('ingredients')),
		steps: separateLines(formData.get('steps')),
	};

	const options = {
		method: 'POST',
		headers: {
			'content-Type': 'application/json',
			'X-Authorization': sessionStorage.accessToken,
		},
		body: JSON.stringify(recipe),
	};

	if ([...formData.values()].some((x) => x == '')) {
		throw new Error('Please fill all values');
	}

	try {
		const response = await fetch(url, options);

		if (response.ok == false) {
			const error = await response.json();
			throw new Error(error.message);
		}

		const data = await response.json();
		window.location = 'index.html';
	} catch (error) {
		alert(error.message);
	}
}

function separateLines(input) {
	//---- Split rows as array element, remove empty lines and spaces --------------
	return input
		.split('\n')
		.map((x) => x.trim())
		.filter((x) => x);
}
