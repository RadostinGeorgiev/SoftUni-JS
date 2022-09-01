import { getUserData } from "./utils.js";

export function furnitureTemplate(record) {
	const { name, price, factor, img, _createdOn, _id } = record;

	const userData = getUserData();
	const isLogged = userData ? true : false;

	const wrap = document.createElement('tr');
	//exercise for templating; don't use in production code
	wrap.innerHTML = `<td>
<img src=${img}>
</td>
<td>
<p>${name}</p>
</td>
<td>
<p>${price}</p>
</td>
<td>
<p>${factor}</p>
</td>
<td>
<input type="checkbox" ${!isLogged ? 'disabled' : ''}/>
</td>`;

	return wrap;
}