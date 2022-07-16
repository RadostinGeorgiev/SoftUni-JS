function attachEvents() {
	const specialSymbols = {
		Sunny: '&#x2600;',
		'Partly sunny': '&#x26C5;',
		Overcast: '&#x2601;',
		Rain: '&#x2614;',
		Degrees: '&#176;',
	};

	const baseURL = 'http://localhost:3030/jsonstore/forecaster/';

	//---- get elements -----------------------------------------------------
	const elements = {
		location: document.getElementById('location'),
		forecast: document.getElementById('forecast'),
		currentForecast: document.getElementById('current'),
		upcomingForecast: document.getElementById('upcoming'),
	};

	//---- onClick event processing -----------------------------------------------------
	document.getElementById('submit').addEventListener('click', async () => {
		try {
			//---- get location code ----------------------------------------------------
			const code = await getLocationCode(`${baseURL}/locations`);

			//---- get forecasts --------------------------------------------------------
			const [currentForecast, upcomingForecast] = await Promise.all([
				getRequest(`${baseURL}/today/${code}`),
				getRequest(`${baseURL}/upcoming/${code}`),
			]);

			//---- display info ---------------------------------------------------------
			elements.forecast.style.display = 'block';

			displayCurrentCondition(currentForecast);
			displayUpcomingForecast(upcomingForecast);
		} catch (error) {
			//---- error processing -----------------------------------------------------
			elements.forecast.style.display = 'block';
			elements.forecast.textContent = error.message;
		}
	});

	//---- create DOM elements & display current condition info -------------------------
	function displayCurrentCondition(forecast) {
		const {
			name,
			forecast: { condition },
			forecast: { low },
			forecast: { high },
		} = forecast;

		elements.currentForecast.replaceChildren();

		createElement(
			'div',
			'Current conditions',
			elements.currentForecast,
			'class',
			'label'
		);

		const divForecastElement = createElement(
			'div',
			'',
			elements.currentForecast,
			'class',
			'forecasts'
		);

		createElement(
			'span',
			'',
			divForecastElement,
			'class',
			'condition symbol'
		).innerHTML = specialSymbols[condition];

		const conditionElement = createElement(
			'span',
			'',
			divForecastElement,
			'class',
			'condition'
		);
		createElement('span', name, conditionElement, 'class', 'forecast-data');
		createElement(
			'span',
			'',
			conditionElement,
			'class',
			'forecast-data'
		).innerHTML = `${low}${specialSymbols['Degrees']}/${high}${specialSymbols['Degrees']}`;
		createElement(
			'span',
			condition,
			conditionElement,
			'class',
			'forecast-data'
		);
	}

	//---- create DOM elements & display forecasts info ---------------------------------
	function displayUpcomingForecast(forecast) {
		elements.upcomingForecast.replaceChildren();

		createElement(
			'div',
			'Three-day forecast',
			elements.upcomingForecast,
			'class',
			'label'
		);

		const divForecastElement = createElement(
			'div',
			'',
			elements.upcomingForecast,
			'class',
			'forecast-info'
		);

		forecast.forecast.forEach((el) => {
			const { condition, low, high } = el;

			const upcomingSpanElement = createElement(
				'span',
				'',
				divForecastElement,
				'class',
				'upcoming'
			);

			createElement(
				'span',
				'',
				upcomingSpanElement,
				'class',
				'symbol'
			).innerHTML = specialSymbols[condition];
			createElement(
				'span',
				'',
				upcomingSpanElement,
				'class',
				'forecast-data'
			).innerHTML = `${low}${specialSymbols['Degrees']}/${high}${specialSymbols['Degrees']}`;
			createElement(
				'span',
				condition,
				upcomingSpanElement,
				'class',
				'forecast-data'
			);
		});
	}

	//---- function for make request, filter response & return location code ------------
	async function getLocationCode(url) {
		const location = await getRequest(url);
		const currentLocation = location.find(
			(x) => x.name === elements.location.value
		);

		if (!currentLocation) {
			throw new Error('Error');
		}

		return currentLocation.code;
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

attachEvents();
