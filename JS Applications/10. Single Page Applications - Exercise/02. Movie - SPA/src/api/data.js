import * as api from './api.js';

//---- all CRUD functions for movies -------------------------------------------

const endpoints = {
    movies: '/data/movies',
    likes: '/data/likes',
    likesFilteredByMovieId: (movieId) => `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count `,
    likesFilteredByMovieAndUsedId: (movieId, userId) => `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`,

}

const getAllMovies = async () => await api.get(endpoints.movies);

const getMovieById = async (id) => api.get(endpoints.movies + `/${id}`);

const createMovie = async (movie) => api.post(endpoints.movies, movie);

const editMovieById = async (movie, id) => api.put(endpoints.movies + `/${id}`, movie);

const deleteMovieById = async (id) => api.del(endpoints.movies + `/${id}`);

const getLikesByMovieId = async (movieId) => await api.get(endpoints.likesFilteredByMovieId(movieId));

const getBoughtByItemIdAndUserId = async (movieId, userId) => await api.get(endpoints.likesFilteredByMovieAndUsedId(movieId, userId));

const addLike = async (movieId) => await api.post(endpoints.likes, { movieId });

const revokeLikeById = async (id) => api.del(endpoints.likes + `/${id}`);

export {
    getAllMovies,
    getMovieById,
    createMovie,
    editMovieById,
    deleteMovieById,
    getLikesByMovieId,
    getBoughtByItemIdAndUserId,
    addLike,
    revokeLikeById
}
