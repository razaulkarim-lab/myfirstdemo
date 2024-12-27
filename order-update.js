// Function to load orders from the backend and display them
async function loadOrders() {
    try {
        const response = await fetch("http://localhost:3001/orders");
        const orders = await response.json();

        const orderTableBody = document.querySelector("#orderTable tbody");
        orderTableBody.innerHTML = ""; // Clear existing rows

        orders.forEach(order => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customerName}</td>
                <td>${order.product}</td>
                <td>${order.quantity}</td>
                <td>${order.status}</td>
                <td><button onclick="deleteOrder(${order.id})">Delete</button></td>
            `;
            orderTableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error loading orders:", error);
    }
}

// Function to add a new order
async function addOrder(event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;
    const product = document.getElementById("product").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const status = document.getElementById("status").value;

    try {
        const response = await fetch("http://localhost:3001/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customerName, product, quantity, status })
        });

        if (response.ok) {
            loadOrders(); // Reload orders after adding
            document.getElementById("orderForm").reset();
        } else {
            console.error("Failed to add order");
        }
    } catch (error) {
        console.error("Error adding order:", error);
    }
}

// Function to delete an order
async function deleteOrder(orderId) {
    try {
        const response = await fetch(`http://localhost:3001/orders/${orderId}`, {
            method: "DELETE"
        });

        if (response.ok) {
            loadOrders(); // Reload orders after deletion
        } else {
            console.error("Failed to delete order");
        }
    } catch (error) {
        console.error("Error deleting order:", error);
    }
}

// Event listener for form submission
document.getElementById("orderForm").addEventListener("submit", addOrder);

// Load orders when the page loads
loadOrders();
