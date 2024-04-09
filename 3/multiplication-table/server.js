const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiplication Table</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    #multiplication-table {
      border-collapse: collapse;
      margin: 20px;
      text-align: center;
    }
    #multiplication-table th, #multiplication-table td {
      border: 1px solid black;
      padding: 8px;
      background-color: #FFFFFF;
    }
    #multiplication-table th {
      background-color: #FFA500;
      font-weight: bold;
    }
  </style>
  </head>
  <body>

  <div id="table-container">
    <!-- The multiplication table will be generated here -->
  </div>

  <script>
    function generateMultiplicationTable() {
      let table = document.createElement('table');
      table.id = 'multiplication-table';

      for (let row = 0; row <= 12; row++) {
        let tr = table.insertRow();

        for (let col = 0; col <= 12; col++) {
          let cell = tr.insertCell();
          let cellValue = '';

          if (row === 0 || col === 0) {
            cellValue = row * col || row || col;
            cell.style.backgroundColor = '#FFA500';
          } else {
            cellValue = col * row;
          }

          cell.innerText = cellValue;
        }
      }

      document.getElementById('table-container').appendChild(table);
    }

    window.onload = generateMultiplicationTable;
  </script>

  </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
