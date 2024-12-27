const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // Update with your database username
    password: '',       // Update with your database password
    database: 'telecom'
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to database.");
});

// Get all orders
app.get('/orders', (req, res) => {
    const query = "SELECT * FROM orders";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching orders:", err);
            res.status(500).send("Failed to retrieve orders.");
        } else {
            res.json(results);
        }
    });
});

// Add a new order
app.post('/orders', (req, res) => {
    const { customerName, product, quantity, status } = req.body;

    const query = "INSERT INTO orders (customerName, product, quantity, status) VALUES (?, ?, ?, ?)";
    db.query(query, [customerName, product, quantity, status], (err, result) => {
        if (err) {
            console.error("Error adding order:", err);
            res.status(500).send("Failed to add order.");
        } else {
            res.status(201).json({ message: "Order added successfully", orderId: result.insertId });
        }
    });
});

// Delete an order by ID
app.delete('/orders/:id', (req, res) => {
    const { id } = req.params;

    const query = "DELETE FROM orders WHERE id = ?";
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error("Error deleting order:", err);
            res.status(500).send("Failed to delete order.");
        } else if (result.affectedRows === 0) {
            res.status(404).send("Order not found.");
        } else {
            res.json({ message: "Order deleted successfully" });
        }
    });
});

// Server listening on port 3001
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
