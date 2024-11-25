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
    <button><a href="/edit">Edit data</a></button>
    <button>Go to <a href="/api">API</a></button>
    <h2>Data</h2>
    <code>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    </code>
    `
  )
});

app.get('/edit', (req, res) => {
  console.log('GET /edit');
  res.send(
    `
    <h1>Edit data</h1>
    <button>Go to <a href="/">Home</a></button>
    <h2>Data</h2>
    <code>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    </code>
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

// CRUD Endpoints
app.post('/api', (req, res) => {
  console.log('POST /api');
  const newData = req.body;
  res.status(201).send('Created new data');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
