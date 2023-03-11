import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/albums',
    allItems: '/data/albums?sortBy=_createdOn%20desc&distinct=name',
    itemsSearch: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`
}

const getAllItems = async () => await api.get(endpoints.allItems);

const getItemById = async (id) => api.get(endpoints.items + `/${id}`);

const createItem = async (item) => api.post(endpoints.items, item);

const editItemById = async (item, id) => api.put(endpoints.items + `/${id}`, item);

const deleteItemById = async (id) => api.del(endpoints.items + `/${id}`);

const getSearchItems = async (query) => await api.get(endpoints.itemsSearch(query));

export {
    getAllItems,
    getItemById,
    createItem,
    editItemById,
    deleteItemById,
    getSearchItems
}