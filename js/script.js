// JavaScript to display a welcome message to the user
welcomeMessage();

// Function to display a welcome message to the user
function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("Welcome to Yama Company! What is your name?");

    // Handle case where user cancels or enters an empty name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message
    document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Yama Company.`;
}

// Function to handle message submission (currently empty)
document.getElementById("send").addEventListener("click", submitMessage);

function submitMessage() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Display message (demo purpose)
    alert(
        "Message Sent!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Message: " + message
    );

    // Reset form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}