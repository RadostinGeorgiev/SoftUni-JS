function attachEvents() {
	const specialSymbols = {
		'Sunny': '&#x2600;',
		'Partly sunny': '&#x26C5;',
		'Overcast': '&#x2601;',
		'Rain': '&#x2614;',
		'Degrees': '&#176;',
	};

	const baseURL = 'http://localhost:3030/jsonstore/forecaster';

	//---- get elements -----------------------------------------------------
	const elements = {
		location: document.getElementById('location'),
		forecast: document.getElementById('forecast'),
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
			elements.forecast.replaceChildren();

			displayCurrentCondition(currentForecast);
			displayUpcomingForecast(upcomingForecast);
		} catch (error) {
			//---- error processing -----------------------------------------------------
			elements.forecast.style.display = 'block';

			elements.forecast.replaceChildren(createElement('div', 'Error', elements.forecast, 'id', 'error'));
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

		//elements.currentForecast.replaceChildren();
		
		const currentForecast =  createElement('div', '', elements.forecast, 'id', 'current');
		createElement('div', 'Current conditions', currentForecast, 'class', 'label');
		const divForecastElement = createElement('div', '', currentForecast, 'class', 'forecasts');
		createElement('span', '', divForecastElement, 'class', 'condition symbol').innerHTML = specialSymbols[condition];
		const conditionElement = createElement('span', '', divForecastElement, 'class', 'condition');
		createElement('span', name, conditionElement, 'class', 'forecast-data');
		createElement('span', '', conditionElement, 'class', 'forecast-data').innerHTML = `${low}${specialSymbols['Degrees']}/${high}${specialSymbols['Degrees']}`;
		createElement('span', condition, conditionElement, 'class', 'forecast-data');
	}

	//---- create DOM elements & display forecasts info ---------------------------------
	function displayUpcomingForecast(forecast) {
		//elements.upcomingForecast.replaceChildren();

		const upcomingForecast =  createElement('div', '', elements.forecast, 'id', 'upcoming');
		createElement('div', 'Three-day forecast', upcomingForecast, 'class', 'label');
		const divForecast = createElement('div', '', upcomingForecast, 'class', 'forecast-info');

		forecast.forecast.forEach((el) => {
			const { condition, low, high } = el;

			const upcomingSpan = createElement('span', '', divForecast, 'class', 'upcoming');
			createElement('span', '', upcomingSpan, 'class', 'symbol').innerHTML = specialSymbols[condition];
			createElement('span', '', upcomingSpan, 'class', 'forecast-data').innerHTML = `${low}${specialSymbols['Degrees']}/${high}${specialSymbols['Degrees']}`;
			createElement('span', condition, upcomingSpan, 'class', 'forecast-data');
		});
	}

	//---- function for make request, filter response & return location code ------------
	async function getLocationCode(url) {
		const location = await getRequest(url);
		const currentLocation = location.find(x => x.name === elements.location.value);

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
	if (parent) {
		parent.appendChild(element);
	}
	if (attr) {
		element.setAttribute(attr, attrValue);
	}
	if (disabled) {
		element.disabled = disabled;
	}

	return element;
}

attachEvents();
