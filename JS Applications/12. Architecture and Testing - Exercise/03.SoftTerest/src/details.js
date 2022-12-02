import { deleteItemById, getItemById } from "./data.js";
import { getUserData } from "./utils.js";

//---- get elements ------------------------------------------------------------
const section = document.getElementById('detailsPage');


section.remove();
let ctx = null;

export function showDetailsPage(ctxExt, id) {
    ctx = ctxExt;
    ctx.showSection(section);
    loadIdea(id);
}

//---- load info for selected element ------------------------------------------
async function loadIdea(id) {
    const idea = await getItemById(id);
    
    section.replaceChildren(createIdea(idea));
}

//---- create info elements for details page -----------------------------------
function createIdea(idea) {
    const userData = getUserData();
    const fragment = document.createDocumentFragment();

    const img = document.createElement('img');
    img.className = "det-img";
    img.src = idea.img;

    const desc = document.createElement('div');
    desc.className = "desc";
    desc.innerHTML = `                
    <h2 class="display-5">${idea.title}</h2>
    <p class="infoType">Description:</p>
    <p class="idea-description">${idea.description}</p>`;

    fragment.appendChild(img);
    fragment.appendChild(desc);

    if (userData && userData.id == idea._ownerId) {
        const button = document.createElement('div');
        button.className = "text-center";
        button.innerHTML = `<a class="btn detb" href="">Delete</a>`;
        button.addEventListener('click', onButtonClick);

        fragment.appendChild(button);
    }

    //---- on Delete button click function--------------------------------------
    async function onButtonClick(event) {
        event.preventDefault();
        
        //---- requiring user consent for deletion------------------------------
        const confirmed = confirm('Are you sure you want to delete this idea?');
        if (confirmed) {
            await deleteItemById(idea._id);
            ctx.goTo('dashboard');
        }
    }

    return fragment;
}