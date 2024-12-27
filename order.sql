CREATE DATABASE telecom;
USE telecom;

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customerName VARCHAR(255) NOT NULL,
    product VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    status ENUM('Pending', 'Shipped', 'Delivered') DEFAULT 'Pending'
);
