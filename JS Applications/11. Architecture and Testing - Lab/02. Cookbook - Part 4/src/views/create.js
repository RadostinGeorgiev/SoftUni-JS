import { createItem } from '../api/data.js';
import { showDetails } from './details.js';

let main;
let section;
let setActiveNav;
let ctx;

export function setupCreate(targetMain, targetSection, onActiveNav, ctxExt) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;
    ctx = ctxExt;

    //---- get elements ------------------------------------------------------------
    const form = targetSection.querySelector('form');

    //---- attach event listeners --------------------------------------------------
    form.addEventListener('submit', onSubmit);

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = {
            name: formData.get('name').trim(),
            img: formData.get('img').trim(),
            ingredients: formData.get('ingredients').trim().split('\n').map(l => l.trim()).filter(l => l != ''),
            steps: formData.get('steps').trim().split('\n').map(l => l.trim()).filter(l => l != '')
        };

        const userData = sessionStorage.getItem('userData');
        if (userData == null) {
            return alert('You\'re not logged in!');
        }

        const response = await createItem(data);

        form.reset();
        ctx.setUserNav();

        //---- redirect to details page -------------------------------------------
        showDetails(response._id);
    }
}

export function showCreate() {
    setActiveNav('createLink');
    main.innerHTML = '';
    main.appendChild(section);
}