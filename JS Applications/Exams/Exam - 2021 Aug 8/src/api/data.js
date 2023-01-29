import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/books',
    allItems: `/data/books?sortBy=_createdOn%20desc`,
    itemsFiltered: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    likes: `/data/likes`,
    likesFilteredByBookId: (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    likesFilteredByBookAndUsedId: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
}

const getAllItems = async () => await api.get(endpoints.allItems);

const getItemById = async (id) => api.get(endpoints.items + `/${id}`);

const createItem = async (item) => api.post(endpoints.items, item);

const editItemById = async (item, id) => api.put(endpoints.items + `/${id}`, item);

const deleteItemById = async (id) => api.del(endpoints.items + `/${id}`);

const getMyItem = async (userId) => await api.get(endpoints.itemsFiltered(userId));

const getSearchItems = async (query) => await api.get(endpoints.itemsSearch(query));

const getLikesByItemId = async (bookId) => await api.get(endpoints.likesFilteredByBookId(bookId));

const getLikesByItemIdAndUserId = async (bookId, userId) => api.get(endpoints.likesFilteredByBookAndUsedId(bookId, userId));

const addLike = async (bookId) => api.post(endpoints.likes, { bookId });

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