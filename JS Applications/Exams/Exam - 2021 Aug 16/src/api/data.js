import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/games',
    allItems: `/data/games?sortBy=_createdOn%20desc`,
    home: `/data/games?sortBy=_createdOn%20desc&distinct=category`,
    comments: '/data/comments',
    commentsByGameId: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
}

const getAllItems = async () => await api.get(endpoints.allItems);

const getHomeItems = async () => await api.get(endpoints.home);

const getItemById = async (id) => api.get(endpoints.items + `/${id}`);

const createItem = async (item) => api.post(endpoints.items, item);

const editItemById = async (item, id) => api.put(endpoints.items + `/${id}`, item);

const deleteItemById = async (id) => api.del(endpoints.items + `/${id}`);

const getComments = async (itemId) => await api.get(endpoints.commentsByGameId(itemId));

const addComment = async (gameId, comment) => api.post(endpoints.comments, { gameId, comment });

export {
    getAllItems,
    getHomeItems,
    getItemById,
    createItem,
    editItemById,
    deleteItemById,
    getComments,
    addComment,
}