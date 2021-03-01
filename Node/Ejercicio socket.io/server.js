const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('nombre', (msg) => {
    io.emit('entraSala',"Ha entrado en sala "+msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('mensaje', (msg) => {
    io.emit('mensajeDesdeServidor', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});