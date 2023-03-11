import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/products',
    allItems: '/data/products?sortBy=_createdOn%20desc',
    bought: '/data/bought',
    boughtFilteredByItemId: (itemId) => `/data/bought?where=productId%3D%22${itemId}%22&distinct=_ownerId&count`,
    boughtFilteredByItemAndUsedId: (itemId, userId) => `/data/bought?where=productId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
}

const getAllItems = async () => await api.get(endpoints.allItems);

const getItemById = async (id) => api.get(endpoints.items + `/${id}`);

const createItem = async (item) => api.post(endpoints.items, item);

const editItemById = async (item, id) => api.put(endpoints.items + `/${id}`, item);

const deleteItemById = async (id) => api.del(endpoints.items + `/${id}`);

const getBoughtByItemId = async (itemId) => await api.get(endpoints.boughtFilteredByItemId(itemId));

const getBoughtByItemIdAndUserId = async (itemId, userId) => await api.get(endpoints.boughtFilteredByItemAndUsedId(itemId, userId));

const addBuy = async (productId) => await api.post(endpoints.bought, { productId });

export {
    getAllItems,
    getItemById,
    createItem,
    editItemById,
    deleteItemById,
    getBoughtByItemId,
    getBoughtByItemIdAndUserId,
    addBuy
}