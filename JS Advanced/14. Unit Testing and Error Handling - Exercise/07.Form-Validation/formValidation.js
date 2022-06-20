function validate() {
    document.getElementById('submit')
        .addEventListener('click', onSubmitClick);

    document.getElementById('company')
        .addEventListener('change', onCheckBoxClick);

    function onSubmitClick(ev) {
        ev.preventDefault();

        const username = document.getElementById('username');
        const userNameRegex = /^[A-Za-z0-9]{3,20}$/;
        const isUserNameValid = userNameRegex.test(username.value);
        changeState(username, isUserNameValid);

        const email = document.getElementById('email');
        const emailRegex = /^.*@.*\..*$/;
        const isEmailValid = emailRegex.test(email.value);
        changeState(email, isEmailValid);

        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const passwordRegex = /^[\w]{5,15}$/;

        const arePasswordsValid = (password.value === confirmPassword.value &&
            passwordRegex.test(password.value));
        changeState(password, arePasswordsValid);
        changeState(confirmPassword, arePasswordsValid);

        const company = document.getElementById('company');
        const companyNumberRegex = /^[0-9]{4}$/;
        const isCheckBoxChecked = company.checked;
        let isValidCompanyNumber = false;

        if (isCheckBoxChecked) {
            const companyNumberElement = document.getElementById('companyNumber');
            isValidCompanyNumber = companyNumberRegex.test(companyNumberElement.value)
            changeState(companyNumberElement, isValidCompanyNumber);
        }

        const resultDivElement = document.getElementById('valid');
        const requiredFields = [isUserNameValid, isEmailValid, arePasswordsValid];
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

    function onCheckBoxClick({target}) {
        document.getElementById('companyInfo').style.display = target.checked
            ? 'block'
            : 'none';
    }
}