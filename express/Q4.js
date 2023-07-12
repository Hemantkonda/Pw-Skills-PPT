const express = require('express');
const app = express();

// Generate a random number between 1 and 10
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// Random route
app.get('/random', (req, res) => {
  const randomNumber = generateRandomNumber();
  res.json({ random: randomNumber });
});

// Start the server on port 3000
app.listen(3050, () => {
  console.log('Server is running on http://localhost:3050');
});
