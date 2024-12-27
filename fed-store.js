document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetch feedback data from the server
        const response = await fetch("/api/feedback");
        if (!response.ok) throw new Error("Failed to fetch feedback data");

        const feedbackData = await response.json();
        const feedbackTableBody = document.getElementById("feedbackTableBody");

        // Populate the feedback data into the table
        feedbackData.forEach(feedback => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${feedback.name}</td>
                <td>${feedback.email}</td>
                <td>${feedback.feedback}</td>
                <td>${feedback.rating}</td>
                <td>${new Date(feedback.date).toLocaleDateString()}</td>
            `;
            feedbackTableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error loading feedback:", error);
    }
});
