function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(el => el.addEventListener('click', onToggle));

    function onToggle(ev) {
        const radioButton = ev.target.parentElement.querySelector('[type=radio]:checked');
        
        if (radioButton.value == 'unlock') {
            const button = ev.target;

            button.textContent = button.textContent == 'Show more'
                ? 'Hide it'
                : 'Show more';

            const moreInfoElements = Array
                .from(ev.target.parentElement.querySelectorAll('div'))
                .find(el => el.id.includes('HiddenFields'));

            moreInfoElements.style.display = moreInfoElements.style.display == 'inline-block'
                ? 'none'
                : 'inline-block';
        };
    }
}