// Sample data for existing orders (this should come from the backend in a real setup)
let orders = [
    { id: 1, customerName: "John Doe", product: "Internet Package", quantity: 1, status: "Pending" },
    { id: 2, customerName: "Jane Smith", product: "Mobile Plan", quantity: 2, status: "Shipped" }
];

// Function to load orders and display them in the table
function loadOrders() {
    const orderTableBody = document.querySelector("#orderTable tbody");
    orderTableBody.innerHTML = ""; // Clear existing rows

    orders.forEach((order) => {
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
}

// Function to add a new order
function addOrder(event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;
    const product = document.getElementById("product").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const status = document.getElementById("status").value;

    // Create a new order object
    const newOrder = {
        id: orders.length + 1, // This would normally be handled by the database
        customerName,
        product,
        quantity,
        status
    };

    // Add the new order to the array and reload the table
    orders.push(newOrder);
    loadOrders();

    // Clear the form
    document.getElementById("orderForm").reset();
}

// Function to delete an order
function deleteOrder(orderId) {
    orders = orders.filter(order => order.id !== orderId);
    loadOrders();
}

// Event listener for form submission
document.getElementById("orderForm").addEventListener("submit", addOrder);

// Load orders when the page loads
loadOrders();
