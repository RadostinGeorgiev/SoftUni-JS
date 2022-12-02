import * as api from './api.js';

//---- all CRUD functions for Ideas --------------------------------------------

async function register(email, password) {
    const data = {
        email: email,
        password: password,
    };

    const result = await api.register(data);

    const userData = {
        id: result._id,
        accessToken: result.accessToken,
        email: result.email,
    };
    sessionStorage.setItem('userData', JSON.stringify(userData));
} 

async function login(email, password) {
    const data = {
        email: email,
        password: password,
    };

    const result = await api.login(data);

    const userData = {
        id: result._id,
        accessToken: result.accessToken,
        email: result.email,
    };
    sessionStorage.setItem('userData', JSON.stringify(userData));
} 

async function logout() {
    await api.logout();
    sessionStorage.removeItem('userData');
}

const endpoints = {
    items: '/data/ideas',
    itemsSorted: '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
}

async function getAllItems() {
    return await api.get(endpoints.itemsSorted);
}

async function getItemById(id) {
    return api.get(endpoints.items + `/${id}`);
}

async function createItem(item) {
    return api.post(endpoints.items, item);
}

async function editItemById(id, item) {
    return api.put(endpoints.items + `/${id}`, item);
}

async function deleteItemById(id) {
    return api.del(endpoints.items + `/${id}`);
}

export { getAllItems, getItemById, createItem, editItemById, deleteItemById, register, login, logout }