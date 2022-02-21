function validate() {
    document.querySelector('#submit')
        .addEventListener('click', onSubmitClick);

    document.querySelector('#company')
        .addEventListener('change', onCheckBoxClick);

    function onSubmitClick(ev) {
        ev.preventDefault();

        const username = document.querySelector('#username');
        const userNameRegex = /^[A-Za-z0-9]{3,20}$/;
        changeState(username, userNameRegex.test(username.value));

        const email = document.querySelector('#email');
        const emailRegex = /^.*@.*\..*$/;
        changeState(email, emailRegex.test(email.value));

        const password = document.querySelector('#password');
        const confirmPassword = document.querySelector('#confirm-password');
        const passwordRegex = /^[\w]{5,15}$/;

        const arePasswordsEqual = (password.value === confirmPassword.value &&
            passwordRegex.test(password.value));
        changeState(password, arePasswordsEqual);
        changeState(confirmPassword, arePasswordsEqual);

        const company = document.querySelector('#company');
        const companyNumberRegex = /^[0-9]{4}$/;
        const isCheckBoxChecked = company.checked;
        let isValidCompanyNumber = false;

        if (isCheckBoxChecked) {
            const companyNumberElement = document.querySelector('#companyNumber');
            isValidCompanyNumber = companyNumberRegex.test(companyNumberElement.value)
            changeState(companyNumberElement, isValidCompanyNumber);
        }

        const resultDivElement = document.querySelector('#valid');
        const requiredFields = [isUserNameValid, isEmailValid, arePasswordsEqual];
        const areRequiredFieldsValid = requiredFields.every(x => x);

        resultDivElement.style.display =
            ((isCheckBoxChecked && isValidCompanyNumber && areRequiredFieldsValid) ||
                (areRequiredFieldsValid && !isCheckBoxChecked))
                ? 'block'
                : 'none';

        function changeState(element, isValid) {
            isValid
                ? element.style.border = 'none'
                : element.style.borderColor = 'red';
        }
    }

    function onCheckBoxClick(ev) {
        document.querySelector('#companyInfo').style.display = e.target.checked
            ? 'block'
            : 'none';
    }
}