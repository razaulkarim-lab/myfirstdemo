const express = require("express");
const app = express();
const db = require("./db"); // Assuming you have a database connection in db.js

app.use(express.json());

// Route to fetch feedback data
app.get("/api/feedback", async (req, res) => {
    try {
        // Query the database for all feedback records
        const feedbackData = await db.query("SELECT name, email, feedback, rating, date FROM feedback");
        res.json(feedbackData.rows); // Assuming you're using PostgreSQL or similar
    } catch (error) {
        console.error("Error fetching feedback:", error);
        res.status(500).json({ message: "Error fetching feedback" });
    }
});

// Server listening
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
