// JavaScript to display a welcome message to the user
welcomeMessage();

// Function to display a welcome message to the user
function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("Welcome to Adittya Company! What is your name?");

    // Handle case where user cancels or enters an empty name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message
    document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Adittya Company.`;
}

// Function to handle message submission
document.getElementById("send").addEventListener("click", submitMessage);

function submitMessage() {
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value.trim();

    // Validation
    if (name === "" || dob === "" || !gender || message === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Format date for display
    const dobDate = new Date(dob);
    const formattedDOB = dobDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    // Update results
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultDOB').textContent = formattedDOB.replace(/\//g, '/');
    document.getElementById('resultGender').textContent = gender.value === 'Laki-Laki' ? 'Laki - Laki' : 'Perempuan';
    document.getElementById('resultMessage').textContent = message;

    // Show success message
    alert(
        "Message Sent!\n\n" +
        "Name: " + name + "\n" +
        "Tanggal Lahir: " + formattedDOB + "\n" +
        "Jenis Kelamin: " + gender.value + "\n" +
        "Message: " + message
    );
}

// Update current time
function updateTime() {
    const now = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };
    const timeString = now.toLocaleDateString('en-US', options);
    document.getElementById('currentTime').textContent = timeString;
}

// Initial time update
updateTime();
// Update every second
setInterval(updateTime, 1000);

// Set default form values when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set default date to 02/04/2023
    document.getElementById('dob').value = '2023-04-02';
    
    // Set gender to Laki-Laki by default
    document.querySelector('input[value="Laki-Laki"]').checked = true;
});