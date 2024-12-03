function clearRegistrationForm(){
    document.querySelector(".registrationForm").reset();
} //check (".registrationForm")

function getCurrentYear(){
    return new Date().getFullYear();
}

function validateRegistrationForm(){
    let password = docuemnt.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;
    let isNoErrors = true;

    if (password != confirmPassword) {
        alert("Password and Confirm Password does not match. Please try again.");
        isNoErrors = false;
    }
    if (!isNoErrors)
        return isNoErrors;
}
