"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    var htmlContent = "<!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Multiplication Table</title>\n  <style>\n    body {\n      font-family: Arial, sans-serif;\n    }\n    #multiplication-table {\n      border-collapse: collapse;\n      margin: 20px;\n      text-align: center;\n    }\n    #multiplication-table th, #multiplication-table td {\n      border: 1px solid black;\n      padding: 8px;\n      background-color: #FFFFFF;\n    }\n    #multiplication-table th {\n      background-color: #FFA500;\n      font-weight: bold;\n    }\n  </style>\n  </head>\n  <body>\n\n  <div id=\"table-container\">\n    <!-- The multiplication table will be generated here -->\n  </div>\n\n  <script>\n    function generateMultiplicationTable() {\n      const table = document.createElement('table');\n      table.id = 'multiplication-table';\n\n      for (let row = 0; row <= 12; row++) {\n        let tr = table.insertRow();\n\n        if ( row === 0 ) {\n            let cell0 = tr.insertCell();\n            cell0.innerText = 'X';\n            cell0.style.backgroundColor = '#FFA500'; \n        }\n        else {\n            let cell0 = tr.insertCell();\n            cell0.innerText = row;\n            cell0.style.backgroundColor = '#FFA500'; \n        }\n\n        for (let col = 1; col <= 12; col++) {\n            let cell = tr.insertCell();\n            let cellValue = '';\n\n            if (row === 0) {\n                cellValue = col; // This sets the headers properly\n                cell.style.backgroundColor = '#FFA500'; // Orange background for headers\n            } else {\n                cellValue = col * row;\n            }\n\n            cell.innerText = cellValue;\n        }\n    }\n\n      document.getElementById('table-container')?.appendChild(table);\n    }\n\n    window.onload = generateMultiplicationTable;\n  </script>\n\n  </body>\n  </html>";
    res.send(htmlContent);
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
