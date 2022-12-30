import { getMovieById, deleteMovieById, getLikesByMovieId, getBoughtByItemIdAndUserId, addLike } from "./api/data.js";
import { showSection } from "./app.js";
import { showEdit } from "./edit.js";
import { showHome } from "./home.js";
import { templateMovieDetails } from "./templates.js";
import { getUserData } from "./utils.js";

const movie = document.getElementById('movie-example');

async function showDetails(id) {
    const data = await getMovieById(id);

    const userData = getUserData();
    const isOwner = userData
        ? userData.id == data._ownerId
        : false;

    const likes = await getLikesByMovieId(id);
    const likesByUser = userData
        ? await getBoughtByItemIdAndUserId(id, userData.id)
        : 0;


    movie.replaceChildren(templateMovieDetails(data, likes));
    showSection('movie-example');

    //---- get elements ------------------------------------------------------------
    const buttons = document.querySelectorAll('.btn');
    const btnDelete = document.querySelector('.btn-danger');
    const btnEdit = document.querySelector('.btn-warning');
    const btnLike = document.querySelector('.btn-primary');

    //---- attach event listeners --------------------------------------------------
    btnDelete.addEventListener('click', onDeleteClick);
    btnEdit.addEventListener('click', onEditClick);
    btnLike.addEventListener('click', onLikeClick);

    //---- init elements -----------------------------------------------------------
    buttons.forEach(x => x.style.visibility = 'hidden');

    if (isOwner) {
        btnDelete.style.visibility = 'visible';
        btnEdit.style.visibility = 'visible';
    } else if (userData && likesByUser == 0) {
        btnLike.style.visibility = 'visible';
    }

    async function onDeleteClick() {
        await deleteMovieById(id);
        showHome();
    }

    function onEditClick() {
        showEdit(id);
    }

    function onLikeClick() {
        addLike(id);
        showDetails(id);
    }
}

export { showDetails }