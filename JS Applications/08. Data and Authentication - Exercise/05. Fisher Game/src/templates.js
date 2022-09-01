export function catchTemplate(record, isAuthor) {
	const { angler, weight, species, location, bait, captureTime, _id } = record;
	const wrap = document.createElement('div');
	wrap.className = 'catch';
 
	//exercise for templating; don't use in production code
	wrap.innerHTML = `<label>Angler</label>
<input type="text" class="angler" value="${angler}">
<label>Weight</label>
<input type="number" class="weight" value="${weight}">
<label>Species</label>
<input type="text" class="species" value="${species}">
<label>Location</label>
<input type="text" class="location" value="${location}">
<label>Bait</label>
<input type="text" class="bait" value="${bait}">
<label>Capture Time</label>
<input type="number" class="captureTime" value="${captureTime}">
<button class="update" data-id="${_id}" ${!isAuthor ? 'disabled' : ''}>Update</button>
<button class="delete" data-id="${_id}" ${!isAuthor ? 'disabled' : ''}>Delete</button>`;

	return wrap;
}