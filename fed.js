document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    const rating = document.getElementById('rating').value;

    // Display thank you message
    document.getElementById('thankYouMessage').style.display = 'block';

    // Add feedback to the feedback list
    const feedbackList = document.getElementById('feedbackList');
    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');

    feedbackItem.innerHTML = `
        <h3>${name} (${rating} stars)</h3>
        <p>${feedback}</p>
        <span>Email: ${email}</span>
    `;

    feedbackList.appendChild(feedbackItem);

    // Clear form
    document.getElementById('feedbackForm').reset();

    // Hide thank you message after a few seconds
    setTimeout(() => {
        document.getElementById('thankYouMessage').style.display = 'none';
    }, 3000);
});
