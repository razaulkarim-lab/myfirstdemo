// main.js

document.getElementById('confirm-logout').addEventListener('click', function () {
    // Simulate a logout action (e.g., clear user session, redirect, etc.)
    alert("You have been logged out.");
    // Here you would typically redirect to a login page or clear user session
    // window.location.href = 'login.html'; // Uncomment to redirect to a login page
});

document.getElementById('cancel-logout').addEventListener('click', function () {
    // Close the logout card or perform any other action
    alert("Logout canceled.");
    // You might want to hide the card or redirect back to the main page
    // document.querySelector('.logout-card').style.display = 'none'; // Uncomment to hide the card
});
