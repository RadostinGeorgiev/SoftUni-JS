import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/offers',
    allItems: `/data/offers?sortBy=_createdOn%20desc`,
    applications: `/data/applications`,
    applicationsFilteredByOffer: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    applicationsFilteredByOfferAndUsedId: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
}

const getAllItems = async () => await api.get(endpoints.allItems);

const getItemById = async (id) => api.get(endpoints.items + `/${id}`);

const createItem = async (item) => api.post(endpoints.items, item);

const editItemById = async (item, id) => api.put(endpoints.items + `/${id}`, item);

const deleteItemById = async (id) => api.del(endpoints.items + `/${id}`);

const getSearchItems = async (query) => await api.get(endpoints.itemsSearch(query));

const getApplicationsByOfferId = async (offerId) => await api.get(endpoints.applicationsFilteredByOffer(offerId));

const getApplicationsByOfferAndUserId = async (offerId, userId) => api.get(endpoints.applicationsFilteredByOfferAndUsedId(offerId, userId));

const addApplication = async (offerId) => api.post(endpoints.applications, { offerId });

export {
    getAllItems,
    getItemById,
    createItem,
    editItemById,
    deleteItemById,
    getSearchItems,
    getApplicationsByOfferId,
    getApplicationsByOfferAndUserId,
    addApplication,
}