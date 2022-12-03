import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/catalog',
    itemsFiltered: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
}

async function getAllItems() {
    return await api.get(endpoints.items);
}

async function getItemById(id) {
    return api.get(endpoints.items + `/${id}`);
}

async function createItem(item) {
    return api.post(endpoints.items, item);
}

async function editItemById(item, id) {
    return api.put(endpoints.items + `/${id}`, item);
}

async function deleteItemById(id) {
    return api.del(endpoints.items + `/${id}`);
}

async function getMyItem(userId) {
    return await api.get(endpoints.itemsFiltered(userId));
}

export {
    getAllItems,
    getItemById,
    createItem,
    editItemById,
    deleteItemById,
    getMyItem
}