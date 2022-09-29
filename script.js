// Validating passwords meet requirements and also match
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const inputs = document.querySelectorAll("input")


function removeUnfilled (){
    if (this.value.length > 0) {
        this.className = "";
    }
}

for (let i=0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", removeUnfilled)
}

function validatePassword(){
    if (password.value != confirmpassword.value) {
        password.setCustomValidity("Passwords must match.");
        password.title = "Passwords must match.";
        confirmpassword.setCustomValidity("Passwords must match.");
        confirmpassword.title = "Passwords must match.";
    } else {
        password.setCustomValidity("");
        confirmpassword.setCustomValidity("");
    }
}


password.onchange = validatePassword;
confirmpassword.onkeyup = validatePassword;