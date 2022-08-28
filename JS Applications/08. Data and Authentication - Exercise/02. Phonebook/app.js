function attachEvents() {
	const url = 'http://localhost:3030/jsonstore/phonebook';

    //---- get elements ------------------------------------------------------------
	const inputs = {
		person: document.getElementById('person'),
		phone: document.getElementById('phone'),
	};

	const buttons = {
		load: document.getElementById('btnLoad'),
		create: document.getElementById('btnCreate'),
	};

    //---- attach button events ----------------------------------------------------
	buttons.load.addEventListener('click', onLoadClick);
	buttons.create.addEventListener('click', onCreateClick);

    //---- fill ul with loaded phones ----------------------------------------------
	async function onLoadClick() {
		const ul = document.getElementById('phonebook');
		
		const data = await getRequest();

		if (data.length > 0) {
			ul.replaceChildren(...data.map(p => createLi(p.person, p.phone, p._id)));
		}
	}

    //---- create li & button for phone --------------------------------------------
	function createLi(person, phone, id) {
		const li = document.createElement('li');
		li.textContent = `${person}: ${phone}`;

		const buttonDelete = document.createElement('button');
		buttonDelete.textContent = 'Delete';
		li.appendChild(buttonDelete);

		buttonDelete.addEventListener('click', () => {
			deleteRequest(id);
			li.remove();
		});

		return li;
	}

    //---- read input fields & create phone record ---------------------------------
	async function onCreateClick() {
		if ([...Object.values(inputs)].every((x) => x.value.trim() != '')) {
			const data = {
				person: inputs.person.value,
				phone: inputs.phone.value,
			};

			const result = await postRequest(data);
			onLoadClick();

			inputs.person.value = '';
			inputs.phone.value = '';
		} else {
			alert('Please, fill all values!');
		}
	}

    //---- GET records -------------------------------------------------------------
	async function getRequest() {
		const response = await fetch(url);
		const data = await response.json();

		return Object.values(data);
	}

    //---- POST records ------------------------------------------------------------
	async function postRequest(data) {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};

		const response = await fetch(url, options);
		const result = await response.json();

		return result;
	}

    //---- DELETE records ----------------------------------------------------------
	async function deleteRequest(id) {
		const options = {
			method: 'DELETE',
		};

		await fetch(url + `/${id}`, options);
	}
}

attachEvents();