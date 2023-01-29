//---- get elements ------------------------------------------------------------
const section = document.getElementById('homePage');
const button = section.querySelector('#getStartedLink');

//---- attach event listeners --------------------------------------------------
button.addEventListener('click', onButtonClick);

section.remove();

let ctx = null;

export function showHomePage(ctxExt) {
    ctx = ctxExt;
    ctx.showSection(section);
}

function onButtonClick(event) {
    event.preventDefault();

    //---- redirect to dashboard page ------------------------------------------
    ctx.goTo('dashboard');
};