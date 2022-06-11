function lockedProfile() {
    document.getElementById('main').addEventListener('click', onShowMoreClick);

    function onShowMoreClick({ target }) {
        if (target.tagName == 'BUTTON') {
            const radioButton = target.parentElement.querySelector('[type=radio]');

            if (!radioButton.checked) {
                const hiddenFields = target.parentElement.querySelector('div');

                target.textContent = target.textContent == 'Show more'
                    ? 'Hide it'
                    : 'Show more';

                hiddenFields.style.display = hiddenFields.style.display == 'inline-block'
                    ? 'none'
                    : 'inline-block';
            }
        }
    }
}