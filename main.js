/**
 * Created by mamta-prashant on 9/18/15.
 */
var express = require('express');
var handlerModule = require('./handlers/handlerModule');

var app = express();
var fs = require("fs");
var async = require("async");
var path = require("path");

app.use(express.static(__dirname + '/public'));
console.log("Inside main.js before the stmnt");
app.get('/genres', handlerModule.genreListModule);
console.log("Inside main.js outside the stmnt");
app.get('/genre/:gname', handlerModule.moviesListModule);

app.listen(3100);
console.log('Connection established!');





