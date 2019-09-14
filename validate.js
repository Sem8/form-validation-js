function ValidateForm() {
    let username = document.getElementById('username');
    let phoneNum = document.getElementById('phoneNum');
    let password = document.getElementById('password');
    let confirm_password = document.getElementById('confirm_password');
    let valid = true

    // console.log(username.value);

    if (username.value.length == 0) {
        username.className = 'wrong-input';
        username.nextElementSibling.innerHTML = 'Please type in a User name, it cannot be blank';
        valid = false;
    }
    return valid;
}