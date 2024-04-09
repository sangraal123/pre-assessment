import React, { useState } from 'react';
import './App.css';

function App() {
  const [highlightedNumber, setHighlightedNumber] = useState(null);

  const size = 12; // Define the size of the multiplication table

  const highlightNumber = (number) => {
    setHighlightedNumber(highlightedNumber === number ? null : number);
  };

  // Generate table rows with cells
  const tableRows = Array.from({ length: size }, (_, rowIndex) => (
    <tr key={rowIndex}>
      {Array.from({ length: size }, (_, colIndex) => {
        const value = (rowIndex + 1) * (colIndex + 1);
        const isHighlighted =
          highlightedNumber && value === highlightedNumber;
        const isHeader = rowIndex === 0 || colIndex === 0;
        const cellClass = isHeader
          ? "header"
          : isHighlighted
          ? "highlighted"
          : "";
        return (
          <td
            key={colIndex}
            className={cellClass}
            onClick={() => !isHeader && highlightNumber(value)}
          >
            {isHeader ? (rowIndex === 0 && colIndex === 0 ? "X" : rowIndex + colIndex) : value}
          </td>
        );
      })}
    </tr>
  ));

  return (
    <div className="App">
      <table>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default App;
