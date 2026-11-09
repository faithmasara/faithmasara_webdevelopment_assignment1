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

// Flower search functionality
document.addEventListener("DOMContentLoaded", function () {
    const flowerSearch = document.getElementById("flowerSearch");
    const flowerCards = document.querySelectorAll(".flower-card");
const noResults = document.getElementById("noResults");
    if (!flowerSearch) return;

    flowerSearch.addEventListener("input", function () {
        const searchTerm = flowerSearch.value.toLowerCase().trim();

        flowerCards.forEach(function (card) {
            const flowerDetails = card.textContent.toLowerCase();

            if (flowerDetails.includes(searchTerm)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
        let found = false;

flowerCards.forEach(function (card) {
    if (card.style.display !== "none") {
        found = true;
    }
});

noResults.style.display = found || !searchTerm ? "none" : "block";
    });
});