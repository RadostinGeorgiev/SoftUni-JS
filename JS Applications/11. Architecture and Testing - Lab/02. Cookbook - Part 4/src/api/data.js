import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/recipes',
    allItems: '/data/recipes?sortBy=_createdOn%20desc',
    allItemsByPage: (page, size) => `/data/recipes?select=_id%2Cname%2Cimg&offset=${(page - 1) * size}&pageSize=${size}`,
    recentItems: '/data/recipes?select=_id%2Cname%2Cimg&sortBy=_createdOn%20desc&pageSize=3',
    itemsCount: '/data/recipes?count',
}

const getAllItems = async () => await api.get(endpoints.allItems);

const getAllItemsByPage = async (page, size) => await api.get(endpoints.allItemsByPage(page, size));

const getItemById = async (id) => api.get(endpoints.items + `/${id}`);

const getRecentItems = async () => api.get(endpoints.recentItems);

const createItem = async (item) => api.post(endpoints.items, item);

const editItemById = async (item, id) => api.put(endpoints.items + `/${id}`, item);

const deleteItemById = async (id) => api.del(endpoints.items + `/${id}`);

const getItemsCount = async () => api.get(endpoints.itemsCount);

export {
    getAllItems,
    getAllItemsByPage,
    getItemById,
    getRecentItems,
    createItem,
    editItemById,
    deleteItemById,
    getItemsCount
}