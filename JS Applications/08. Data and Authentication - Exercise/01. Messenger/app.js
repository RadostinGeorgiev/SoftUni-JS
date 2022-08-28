function attachEvents() {
	const url = 'http://localhost:3030/jsonstore/messenger';

	//---- get elements ------------------------------------------------------------
	const inputs = {
		messages: document.getElementById('messages'),
		author: document.querySelector('[name="author"]'),
		content: document.querySelector('[name="content"]'),
	};

	const buttons = {
		submit: document.getElementById('submit'),
		refresh: document.getElementById('refresh'),
	};

	//---- attach button events ----------------------------------------------------
	buttons.submit.addEventListener('click', onSubmitClick);
	buttons.refresh.addEventListener('click', onRefreshClick);

	//---- fill text area with loaded messages -------------------------------------
	async function onRefreshClick() {
		inputs.messages.textContent = (await getRequest())
			.map((m) => `${m.author}: ${m.content}`)
			.join('\n');
	}

	//---- read input fields & create message --------------------------------------
	async function onSubmitClick() {
		const message = {
			author: inputs.author.value,
			content: inputs.content.value,
		};

		if (Object.values(message).every((x) => x != '')) {
			postRequest(message);

			inputs.author.value = '';
			inputs.content.value = '';
			inputs.messages.textContent += `\n${message.author}: ${message.content}`;
		} else {
			alert('Please, fill all values!');
		}
	}

	//---- GET records ------------------------------------------------------------
	async function getRequest() {
		const response = await fetch(url);
		const data = await response.json();

		return Object.values(data);
	}

	//---- POST records ------------------------------------------------------------
	async function postRequest(message) {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(message),
		};

		const response = await fetch(url, options);
		const data = await response.json();
	}
}

attachEvents();
