import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/memes',
    allItems: '/data/memes?sortBy=_createdOn%20desc',
    itemByUser: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    itemsSearch: (query) => `/data/memes?where=name%20LIKE%20%22${query}%22`
}

const getAllItems = async () => await api.get(endpoints.allItems);

const getItemsByUserId = async (userId) => await api.get(endpoints.itemByUser(userId));

const getItemById = async (id) => api.get(endpoints.items + `/${id}`);

const createItem = async (item) => api.post(endpoints.items, item);

const editItemById = async (item, id) => api.put(endpoints.items + `/${id}`, item);

const deleteItemById = async (id) => api.del(endpoints.items + `/${id}`);

const getSearchItems = async (query) => await api.get(endpoints.itemsSearch(query));

export {
    getAllItems,
    getItemsByUserId,
    getItemById,
    createItem,
    editItemById,
    deleteItemById,
    getSearchItems
}