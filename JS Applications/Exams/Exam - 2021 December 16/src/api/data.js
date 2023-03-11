import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/theaters',
    itemsSorted: `/data/theaters?sortBy=_createdOn%20desc&distinct=title`,
    itemsFiltered: (userId) => `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    likes: '/data/likes',
    likesFilteredByItemId: (itemId) => `/data/likes?where=theaterId%3D%22${itemId}%22&distinct=_ownerId&count`,
    likesFilteredByItemAndUsedId: (itemId, userId) => `/data/likes?where=theaterId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
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

async function editItemById(item, id) {
    return api.put(endpoints.items + `/${id}`, item);
}

async function deleteItemById(id) {
    return api.del(endpoints.items + `/${id}`);
}

async function getMyItem(userId) {
    return await api.get(endpoints.itemsFiltered(userId));
}

async function getSearchItems(query) {
    return await api.get(endpoints.itemsSearch(query));
}

async function getLikesByItemId(itemId) {
    return await api.get(endpoints.likesFilteredByItemId(itemId));
}

async function getLikesByItemIdAndUserId(itemId, userId) {
    return api.get(endpoints.likesFilteredByItemAndUsedId(itemId, userId));
}

async function addLike(theaterId) {
    return api.post(endpoints.likes, { theaterId });
}

export {
    getAllItems,
    getItemById,
    createItem,
    editItemById,
    deleteItemById,
    getMyItem,
    getSearchItems,
    getLikesByItemId,
    getLikesByItemIdAndUserId,
    addLike,
}