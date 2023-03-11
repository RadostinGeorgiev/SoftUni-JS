import * as api from './api.js';

//---- all CRUD functions for Furniture ----------------------------------------

const endpoints = {
    items: '/data/pets',
    allItems: `/data/pets?sortBy=_createdOn%20desc&distinct=name`,
    donations: '/data/donation',
    donationsFilteredByPet: (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    donationsFilteredByPetAndUsedId: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

const getAllItems = async () => await api.get(endpoints.allItems);

const getItemById = async (id) => api.get(endpoints.items + `/${id}`);

const createItem = async (item) => api.post(endpoints.items, item);

const editItemById = async (item, id) => api.put(endpoints.items + `/${id}`, item);

const deleteItemById = async (id) => api.del(endpoints.items + `/${id}`);

const getDonationsByPetId = async (petId) => await api.get(endpoints.donationsFilteredByPet(petId));

const getDonationsByPetAndUserId = async (petId, userId) => api.get(endpoints.donationsFilteredByPetAndUsedId(petId, userId));

const addDonations = async (petId) => api.post(endpoints.donations, { petId });

export {
    getAllItems,
    getItemById,
    createItem,
    editItemById,
    deleteItemById,
    getDonationsByPetId,
    getDonationsByPetAndUserId,
    addDonations,
}