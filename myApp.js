var express = require('express');
var app = express();

console.log("Hello World");

const absolutePathIndex = __dirname + "/views/index.html";
const absolutePathCSS = __dirname + "/public";

const sendIndex = (req, res) => res.sendFile(absolutePathIndex);
const middlewareCSS = () => express.static(absolutePathCSS);


app.get('/', sendIndex);
app.use*('/', middlewareCSS);
















 module.exports = app;
