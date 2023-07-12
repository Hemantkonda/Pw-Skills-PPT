const http = require('http');

// Sample data for men and women products
const menProducts = [
  { id: 1, name: 'Men Product 1' },
  { id: 2, name: 'Men Product 2' },
  // Add more products as needed
];

const womenProducts = [
  { id: 1, name: 'Women Product 1' },
  { id: 2, name: 'Women Product 2' },
  // Add more products as needed
];

const server = http.createServer((req, res) => {
  // Set the response header to JSON content type
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    res.statusCode = 200;
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    res.statusCode = 200;
    res.end(JSON.stringify(womenProducts));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

// Start the server on port 3000
server.listen(3020, () => {
  console.log('Server is running on http://localhost:3020');
});
