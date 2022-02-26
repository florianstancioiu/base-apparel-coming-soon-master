function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;

    return re.test(email);
}

const emailInput = document.querySelector('.email-input');
const emailInputWrapper = document.querySelector('.email-input-outter');
const btnEmail = document.querySelector('.btn-email');

btnEmail.addEventListener('click', function (event) {
    event.preventDefault();

    if (!validateEmail(emailInput.value)) {
        emailInputWrapper.classList.add('error');
    } else {
        emailInputWrapper.classList.remove('error');
    }
});
