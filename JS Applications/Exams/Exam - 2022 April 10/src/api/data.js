import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/posts',
    allItems: `/data/posts?sortBy=_createdOn%20desc`,
    itemsFiltered: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    donations: '/data/donations',
    donationsFilteredByPost: (postId) => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    donationsFilteredByPostAndUsedId: (postId, userId) => `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

const getAllItems = async () => await api.get(endpoints.allItems);

const getItemById = async (id) => api.get(endpoints.items + `/${id}`);

const createItem = async (item) => api.post(endpoints.items, item);

const editItemById = async (item, id) => api.put(endpoints.items + `/${id}`, item);

const deleteItemById = async (id) => api.del(endpoints.items + `/${id}`);

const getMyItem = async (userId) => await api.get(endpoints.itemsFiltered(userId));

const getSearchItems = async (query) => await api.get(endpoints.itemsSearch(query));

const getDonationsByPostId = async (postId) => await api.get(endpoints.donationsFilteredByPost(postId));

const getDonationsByPostAndUserId = async (postId, userId) => api.get(endpoints.donationsFilteredByPostAndUsedId(postId, userId));

const addDonations = async (postId) => api.post(endpoints.donations, { postId });

export {
    getAllItems,
    getItemById,
    createItem,
    editItemById,
    deleteItemById,
    getMyItem,
    getSearchItems,
    getDonationsByPostId,
    getDonationsByPostAndUserId,
    addDonations,
}