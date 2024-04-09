const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to enable CORS
app.use(cors());

// API endpoint to get multiplication data
app.get('/api/multiplication', (req, res) => {
  const size = 12;
  let data = [];

  for (let row = 1; row <= size; row++) {
    let rowData = [];
    for (let col = 1; col <= size; col++) {
      rowData.push(row * col);
    }
    data.push(rowData);
  }

  res.json(data);
});

// Serve static files from 'public' directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
