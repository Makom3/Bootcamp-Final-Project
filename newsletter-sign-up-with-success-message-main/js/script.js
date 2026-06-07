const form = document.getElementById("subscribe");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email.value)) {

        // Email is valid
        window.location.href = "success.html";

    } else {

        // Email is invalid
        emailError.textContent = "Please enter a valid email address";
        email.focus();

    }

});