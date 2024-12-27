const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received contact form: Name: ${name}, Email: ${email}, Message: ${message}`);
  res.send('Thank you for contacting us! We will respond soon.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

