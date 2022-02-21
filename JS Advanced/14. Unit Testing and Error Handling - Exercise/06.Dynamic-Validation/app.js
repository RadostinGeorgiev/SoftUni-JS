function validate() {
    let inputField = document.querySelector('#email');
    const validMailPattern = /[a-z]+@[a-z]+\.[a-z]+/g

    inputField.addEventListener('change', (ev) => {
        let email = ev.target.value;

        validMailPattern.test(email)
            ? ev.target.classList.remove('error')
            : ev.target.classList.add('error');
    });
}