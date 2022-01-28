var express = require('express');
var app = express();

console.log("Hello World");

const absolutePathIndex = __dirname + "/views/index.html";
const sendIndex = (req, res) => res.sendFile(absolutePathIndex);

app.get('/', sendIndex);
















 module.exports = app;
