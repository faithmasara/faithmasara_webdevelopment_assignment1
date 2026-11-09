// Bloom & Co. Florist - JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const date = document.getElementById("date").value;
            const message = document.getElementById("message").value.trim();
            const formMessage = document.getElementById("formMessage");

            if (!fullName || !email || !phone || !service || !date || !message) {
                formMessage.textContent = "Please complete all required fields.";
                formMessage.style.color = "red";
                return;
            }

            if (message.length < 10) {
                formMessage.textContent = "Please enter a message of at least 10 characters.";
                formMessage.style.color = "red";
                return;
            }

            formMessage.textContent = "Thank you! Your enquiry has been validated successfully.";
            formMessage.style.color = "green";

            enquiryForm.reset();
        });
    }

});