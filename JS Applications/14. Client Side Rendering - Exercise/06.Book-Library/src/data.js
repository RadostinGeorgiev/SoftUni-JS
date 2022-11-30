import * as api from './api.js';

const endpoints = {
    items: '/jsonstore/collections/books'
}

async function getAllItems() {
    const items = await api.get(endpoints.items);
    return Object.entries(items)
        .map(([key, val]) => Object.assign(val, { _id: key }));
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

export { getAllItems, getItemById, createItem, editItemById, deleteItemById }