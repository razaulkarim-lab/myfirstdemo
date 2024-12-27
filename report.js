// main.js

document.getElementById('filter-btn').addEventListener('click', function () {
    // Simulated sales data (in a real app, you would fetch this from an API)
    const salesData = [
        { id: 'T001', date: '2024-11-01', amount: 150.00, retailer: 'Retailer A' },
        { id: 'T002', date: '2024-11-02', amount: 200.00, retailer: 'Retailer B' },
        { id: 'T003', date: '2024-11-03', amount: 300.00, retailer: 'Retailer C' },
        { id: 'T004', date: '2024-11-04', amount: 250.00, retailer: 'Retailer D' },
    ];

    // Clear previous data
    const salesTableBody = document.querySelector('#sales-table tbody');
    salesTableBody.innerHTML = '';

    // Calculate totals
    let totalSales = 0;
    salesData.forEach(sale => {
        totalSales += sale.amount;

        // Create a new row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${sale.id}</td>
            <td>${sale.date}</td>
            <td>$${sale.amount.toFixed(2)}</td>
            <td>${sale.retailer}</td>
        `;
        salesTableBody.appendChild(row);
    });

    // Update summary statistics
    document.getElementById('total-sales').innerText = `$${totalSales.toFixed(2)}`;
    document.getElementById('total-transactions').innerText = salesData.length;
    document.getElementById('average-sale-value').innerText = `$${(totalSales / salesData.length).toFixed(2)}`;
});
