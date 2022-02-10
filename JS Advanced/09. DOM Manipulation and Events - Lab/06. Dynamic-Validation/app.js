function validate() {
    document.querySelector('#email').addEventListener('change', onChange);

    function onChange({ target }) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        pattern.test(target.value)
            ? target.classList.remove('error')
            : target.classList.add('error');
    }
}