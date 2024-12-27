document.getElementById('settingsForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const notifications = document.getElementById('notifications').value;

    // Send data to the server
    const response = await fetch('/update-settings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password, notifications })
    });

    if (response.ok) {
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('settingsForm').reset();
    } else {
        alert('There was an error updating your settings. Please try again.');
    }
});
