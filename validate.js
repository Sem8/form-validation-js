function ValidateForm() {
    let username = document.getElementById('username');
    let phoneNum = document.getElementById('phoneNum');
    let password = document.getElementById('password');
    let confirm_password = document.getElementById('confirm_password');

    removeMessage();

    let valid = true
    // console.log(username.value);

    if (username.value.length == 0 || username.value.trim() == '') {
        username.className = 'wrong-input';
        username.nextElementSibling.innerHTML = 'Please type in a User name, it cannot be blank';
        valid = false;
    }

    if (phoneNum.value.length < 10) {
        phoneNum.className = 'wrong-input';
        phoneNum.nextElementSibling.innerHTML = 'Phone number has to be 10 digits long';
        valid = false;
    }

    if (password.value.length < 6) {
        password.className = 'wrong-input';
        password.nextElementSibling.innerHTML = 'Password has to be at least 6 characters';
        valid = false;
    }

    if (confirm_password.value != password.value) {
        confirm_password.className = 'wrong-input';
        confirm_password.nextElementSibling.innerHTML = 'Password does not match';
        valid = false;
    }
    return valid;
}

function removeMessage() {
    let errorInput = document.querySelectorAll('.wrong-input');
    [].forEach.call(errorInput, function(eachElement) {
        eachElement.classList.remove('wrong-input');
    });

    let errorText = document.querySelectorAll('.error');
    [].forEach.call(errorText, function(eachParaElement) {
        eachParaElement.innerHTML = '';
    });
}