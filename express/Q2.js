const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse JSON bodies
app.use(bodyParser.json());

let counter = 0;

// Get current counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// Increment the counter
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Decrement the counter
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the server on port 3000
app.listen(3030, () => {
  console.log('Server is running on http://localhost:3030');
});
