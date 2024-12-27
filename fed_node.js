const express = require('express');
const app = express();
app.use(express.json());

// Endpoint to handle feedback submission
app.post('/submit-feedback', (req, res) => {
    const { name, email, feedback, rating } = req.body;
    
    // Database logic here to save the feedback
    // Example: db.query("INSERT INTO feedback (name, email, feedback, rating) VALUES (?, ?, ?, ?)", [name, email, feedback, rating]);

    console.log("Feedback received:", req.body);
    res.status(200).send("Feedback submitted successfully");
});

// Server listening
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
