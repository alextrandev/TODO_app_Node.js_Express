const express = require('express');
const app = express();
const PORT = 3000;

let data = {
  name: 'John Doe',
  age: 30,
  email: 'test@test.com',
  address: '123 Main St, New York, NY 10001'
};

// Website endpoints
app.get('/', (req, res) => {
  console.log('GET /');
  res.send(
    `
    <h1>Hello world</h1>
    <button><a href="/dashboard">Dashboard</a></button>
    `
  )
});

app.get('/dashboard', (req, res) => {
  console.log('GET /dashboard');
  res.send(
    `
    <h1>Dashboard</h1>
    <button>Go to <a href="/">Home</a></button>
    <button>Go to <a href="/api">API</a></button>
    `
  )
});

// API endpoints
app.get('/api', (req, res) => {
  console.log('GET /api');
  res.send(data);
});

app.get('/api/:key', (req, res) => {
  const key = req.params.key;
  console.log(`GET /api/${key}`);
  if (data[key]) {
    res.send(data[key].toString());
  } else {
    res.status(404).send('Key not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
