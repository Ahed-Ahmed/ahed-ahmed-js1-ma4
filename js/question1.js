const form = document.querySelector("#contactForm");

const lastNameError = document.querySelector("#lastNameError");

function checkForm() {

    event.preventDefault();

    if(lastName.value.trim().length >= 5) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

}

form.addEventListener("submit", checkForm);