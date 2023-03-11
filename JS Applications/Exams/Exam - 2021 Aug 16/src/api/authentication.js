import * as api from './api.js';

async function register(email, password) {
    const data = {
        email: email,
        password: password,
    };

    const result = await api.register(data);

    const userData = {
        id: result._id,
        accessToken: result.accessToken,
        email: result.email,
    };
    setUserData(userData);
}

async function login(email, password) {
    const data = {
        email: email,
        password: password,
    };

    const result = await api.login(data);

    const userData = {
        id: result._id,
        accessToken: result.accessToken,
        email: result.email,
    };
    setUserData(userData);
}

async function logout() {
    await api.logout();
    sessionStorage.removeItem('userData');
}

const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));
const getUserId = () => JSON.parse(sessionStorage.getItem('userData')).id;
const getUserToken = () => JSON.parse(sessionStorage.getItem('userData')).accessToken;
const getUserEmail = () => JSON.parse(sessionStorage.getItem('userData')).email;
const setUserData = (data) => sessionStorage.setItem('userData', JSON.stringify(data));
const clearUserData = () => sessionStorage.removeItem('userData');
const isLogged = () => sessionStorage.userData !== undefined;

export {
    register,
    login,
    logout,
    getUserData,
    getUserId,
    getUserToken,
    getUserEmail,
    setUserData,
    clearUserData,
    isLogged
}