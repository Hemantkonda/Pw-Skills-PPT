const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.json({ msg: 'I am homepage' });
});

// About route
app.get('/about', (req, res) => {
  res.json({ msg: 'I am about page' });
});

// Contact route
app.get('/contact', (req, res) => {
  res.json({ email: 'support@pwskills.com' });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
