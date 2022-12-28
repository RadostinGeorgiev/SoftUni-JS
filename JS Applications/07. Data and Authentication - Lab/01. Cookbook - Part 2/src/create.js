document.querySelector('form').addEventListener('submit', onSubmit);
const url = 'http://localhost:3030/data/recipes';

async function onSubmit(event) {
	event.preventDefault();

    //---- check for user authorization ----------------------------------------
    const accessToken = sessionStorage.getItem('accessToken'); 
    if (!accessToken) {
        alert('Please login!');
        window.location = 'login.html';
        return;
    }

	//---- read data from input fields -----------------------------------------
	const formData = new FormData(event.target);

	const recipe = {
		name: formData.get('name'),
		imgUrl: formData.get('img'),
		ingredients: separateLines(formData.get('ingredients')),
		steps: separateLines(formData.get('steps')),
	};

	//---- check for empty input fields ----------------------------------------
	if ([...formData.values()].some((x) => x == '')) {
		throw new Error('Please fill all values');
	}

	const options = {
		method: 'POST',
		headers: {
			'content-Type': 'application/json',
			'X-Authorization': sessionStorage.accessToken,
		},
		body: JSON.stringify(recipe),
	};

	try {
		const response = await fetch(url, options);

		if (response.ok == false) {
			const error = await response.json();
			throw new Error(error.message);
		}

		const data = await response.json();

		//---- redirect page ---------------------------------------------------
		window.location = 'index.html';

	} catch (error) {
		alert(error.message);
	}
}

function separateLines(input) {
	//---- Split rows as array element, remove empty lines and spaces ----------
	return input
		.split('\n')
		.map((x) => x.trim())
		.filter((x) => x);
}
