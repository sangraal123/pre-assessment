"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
// API endpoint to get multiplication data
app.get('/api/multiplication', function (req, res) {
    var size = 12;
    var data = [];
    for (var row = 1; row <= size; row++) {
        var rowData = [];
        for (var col = 1; col <= size; col++) {
            rowData.push(row * col);
        }
        data.push(rowData);
    }
    res.json([size, data]);
});
// Serve static files from 'public' directory
app.use(express_1.default.static('public'));
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
