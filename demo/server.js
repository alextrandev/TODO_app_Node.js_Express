const express = require('express');
const app = express();
const PORT = 3000;

// routes
app.get('/', (req, res) => {
  console.log('GET /');
  res.sendStatus(200);
});

app.get('/api', (req, res) => {
  console.log('GET /api');
  // res.sendStatus(200);
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
