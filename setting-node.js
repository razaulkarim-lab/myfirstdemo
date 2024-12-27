const express = require('express');
const app = express();
app.use(express.json());

// Endpoint to handle settings update
app.post('/update-settings', (req, res) => {
    const { username, email, password, notifications } = req.body;

    // Database logic here to update user settings
    // Example: db.query("UPDATE users SET username = ?, email = ?, password = ?, notifications = ? WHERE id = ?", [username, email, password, notifications, userId]);

    console.log("Settings updated:", req.body);
    res.status(200).send("Settings updated successfully");
});

// Server listening
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
