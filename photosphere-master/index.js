var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/test.html');
});

app.get('/socket.io-1.2.0.js', function(req, res){
  res.sendFile(__dirname + '/socket.io-1.2.0.js');
});

app.get('/jquery-1.11.1.js', function(req, res){
  res.sendFile(__dirname + '/jquery-1.11.1.js');
});


app.get('/extern/three.min.js', function(req, res){
  res.sendFile(__dirname + '/extern/three.min.js');
});

app.get('/lib/sphere.js', function(req, res){
  res.sendFile(__dirname + '/lib/sphere.js');
});

app.get('/agent', function(req, res){
  res.sendFile(__dirname + '/test_agent.html');
});

app.get('/gyro', function(req, res){
  res.sendFile(__dirname + '/gyro.html');
});

io.on('connection', function(socket){
  socket.on('update', function(msg){
    io.emit('update', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
