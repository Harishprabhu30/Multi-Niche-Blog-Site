// You can add JavaScript functionality here
// For example, to handle form submission or add interactivity to the website
document.addEventListener("DOMContentLoaded", function() {
    // Example: Handle form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        // Example: Send form data to server using fetch API
        fetch("submit.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Handle response from server
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
