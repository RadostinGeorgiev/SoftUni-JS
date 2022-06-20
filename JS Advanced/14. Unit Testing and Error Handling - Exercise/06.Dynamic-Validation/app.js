function validate() {
    let inputField = document.getElementById('email');
    const validMailPattern = /[a-z]+@[a-z]+\.[a-z]+/g

    inputField.addEventListener('change', ({target}) => {
        let email = target.value;

        validMailPattern.test(email)
            ? target.classList.remove('error')
            : target.classList.add('error');
    });
}