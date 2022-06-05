function focused() {
    [...document.querySelectorAll('div input')]
        .forEach(x => {
            x.addEventListener('focus', onFocus);
            x.addEventListener('blur', onBlur);
        })

    function onFocus({target}) {
        target.parentElement.classList.add('focused');
    }

    function onBlur({target}) {
        target.parentElement.classList.remove('focused');
    }
}