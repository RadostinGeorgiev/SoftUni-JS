import { get, post, logout } from "./requests.js";
import { furnitureTemplate } from "./templates.js";
import { clearFields, getUserData, isEmptyField } from "./utils.js";

const urls = {
    furnitureUrl: '/data/furniture',
    ordersUrl: '/data/orders',
}

window.addEventListener('DOMContentLoaded', onLoad);

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', onLogoutClick);

const createForm = document.querySelector('form');
createForm.addEventListener('submit', onCreateClick);

const table = document.querySelector('tbody');

const buttons = [...document.querySelectorAll('button')];
buttons[1].addEventListener('click', onBuyClick);
buttons[2].addEventListener('click', onAllOrdersClick);

const [boughtFurniture, totalPrice] = document.querySelectorAll('.orders span');

async function onLoad() {
    const data = await get(urls.furnitureUrl);
    table.replaceChildren(...data.map(furnitureTemplate));

    boughtFurniture.textContent = 'Nothing bought yet!';
    totalPrice.textContent = '0 $';
}

function onLogoutClick() {
    logout();
    window.location = './index.html';
}

async function onCreateClick(event) {
    event.preventDefault();

    const data = getFormValues(createForm);

    if (isEmptyField(createForm)) {
		// alert('Please, fill all fields');
		return;
	}

    await post(urls.furnitureUrl, data);
    clearFields(createForm);
    onLoad();
}

function onBuyClick() {
    [...table.querySelectorAll('input')]
        .filter(x => x.checked == true)
        .forEach(async (x) => {
            x.checked = false;
            let [img, name, price, factor] = x.parentElement.parentElement.children;

            img = img.firstElementChild.src;
            name = name.firstElementChild.textContent;
            price = price.firstElementChild.textContent;
            factor = factor.firstElementChild.textContent;

            const data = { name, price, factor, img };
            await post(urls.ordersUrl, data);
        });
}

async function onAllOrdersClick() {
    const userId = getUserData().id;
    const userOrdersUrl = `/data/orders?_ownerId%3D${userId}`;

    const data = await get(userOrdersUrl)
    const purchases = data.map(x => x.name).join(', ');

    if (purchases != '') {
        boughtFurniture.textContent = purchases;
        totalPrice.textContent = `${data.reduce((a, b) => a + Number(b.price), 0)} $`;
    }
}

function getFormValues(form) {
    const formData = new FormData(form);

    const name = formData.get('name');
    const price = formData.get('price');
    const factor = formData.get('factor');
    const img = formData.get('img');

    const data = { name, price, factor, img };
    return data;
}