import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  const htmlContent = `<!DOCTYPE html>
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
      const table = document.createElement('table');
      table.id = 'multiplication-table';

      for (let row = 0; row <= 12; row++) {
        let tr = table.insertRow();

        if ( row === 0 ) {
            let cell0 = tr.insertCell();
            cell0.innerText = 'X';
            cell0.style.backgroundColor = '#FFA500'; 
        }
        else {
            let cell0 = tr.insertCell();
            cell0.innerText = row;
            cell0.style.backgroundColor = '#FFA500'; 
        }

        for (let col = 1; col <= 12; col++) {
            let cell = tr.insertCell();
            let cellValue = '';

            if (row === 0) {
                cellValue = col; // This sets the headers properly
                cell.style.backgroundColor = '#FFA500'; // Orange background for headers
            } else {
                cellValue = col * row;
            }

            cell.innerText = cellValue;
        }
    }

      document.getElementById('table-container')?.appendChild(table);
    }

    window.onload = generateMultiplicationTable;
  </script>

  </body>
  </html>`;

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});