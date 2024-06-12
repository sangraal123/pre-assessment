import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// API endpoint to get multiplication data
app.get('/api/multiplication', (req: Request, res: Response) => {
  const size = 12;
  let data: number[][] = [];

  for (let row = 1; row <= size; row++) {
    let rowData: number[] = [];
    for (let col = 1; col <= size; col++) {
      rowData.push(row * col);
    }
    data.push(rowData);
  }

  res.json([size, data]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
