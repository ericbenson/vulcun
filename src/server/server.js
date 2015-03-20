'use strict';
var express  = require('express');
var reloader = require('connect-livereload');

var app = express();


// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());


app.use(reloader());
app.use(express.static('./build'));


// Set up our routes
app.use("/contests", router);

var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('increment', function(model){
    io.emit('increment', model);
  });
});

var port = process.env.PORT || 8000;

http.listen(port, function() {
  console.log('listening on port ', port);
});

