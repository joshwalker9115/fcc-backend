var express = require('express');
var app = express();

console.log("Hello World");

const absolutePathIndex = __dirname + "/views/index.html";
const absolutePathCSS = __dirname + "/public";
const jsonResponse = {"message": "Hello json"};

const sendIndex = (req, res) => res.sendFile(absolutePathIndex);
const middlewareCSS = express.static(absolutePathCSS);
const sendJSON = (req, res) => res.json(jsonResponse);

app.get('/', sendIndex);
app.use('/public', middlewareCSS);
app.get('/json', sendJSON);
















 module.exports = app;
