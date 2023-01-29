import * as api from './api.js';

//---- all CRUD functions for Ideas --------------------------------------------

const endpoints = {
    items: '/data/ideas',
    allItems: '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
}

const getAllItems = async () => await api.get(endpoints.allItems);

const getItemById = async (id) => api.get(endpoints.items + `/${id}`);

const createItem = async (item) => api.post(endpoints.items, item);

const editItemById = async (item, id) => api.put(endpoints.items + `/${id}`, item);

const deleteItemById = async (id) => api.del(endpoints.items + `/${id}`);

export { getAllItems, getItemById, createItem, editItemById, deleteItemById }