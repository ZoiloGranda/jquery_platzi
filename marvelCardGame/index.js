const express = require('express');
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http);
const port = 8080;

app.use(express.static(__dirname+'/public'));

app.get('/',function (req, res) {
  console.log(__dirname+'/public');
  res.sendFile(__dirname+'/index.html')
})

app.get('*', function (req, res) {
  console.log('pagina no encontrada');
})

io.on('connection',function (socket) {
  console.log('connected');
  socket.on('disconnect', function () {
    console.log('disconnected');
  })
})

io.on('connection',function (socket) {
  socket. on('chat message', function (msg) {
    io.emit('chat message', msg)
  })
})


http.listen(port,function (err) {
  if (err) return console.log(err);
  console.log('server corriendo ' + port);
})
