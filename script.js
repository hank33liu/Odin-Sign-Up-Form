// Validating passwords meet requirements and also match
const password = document.getElementById("password")
const confirm_password = document.getElementById("confirm-password")

function validatePassword(){
    if (password.value != confirm_password.value) {
        password.title = "test"
        confirm_password.title = "test"
    } else {
        pass
    }

}

console.log('script loaded')
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;