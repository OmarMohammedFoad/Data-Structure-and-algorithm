var error = document.getElementById("errors");

var form = document.getElementById("form");
var regexName = /^[a-zA-Z\s]+$/;
var regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
var regexPhoneNumber = /^[0-9]{8}$/;
var regexMobileNumber = /^(010|012|011)[0-9]{8}$/;
form.onsubmit = function (e) {
    e.preventDefault();
    var flag = true;
    var errors = [];

    if (!regexName.test(fname.value)) {
        errors.push("This name is not allowed");
        flag = false;
    }
    if (!regexEmail.test(email.value)) {
        errors.push("This email is not valid");
        flag = false;
    }
    if (!regexPhoneNumber.test(phone.value)) {
        errors.push("This phone is not valid");
        flag = false;
    }
    if (!regexMobileNumber.test(mobile.value)) {
        errors.push("This mobile is not valid");
        flag = false;
    }

    error.innerHTML = errors.join("<br>");
if (flag) {
    form.submit();
}
};
