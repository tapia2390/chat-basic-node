const path = require('path');
const express = require('express');
const app = express();

const socketIO = require('socket.io');

//settings
app.set('port', process.env.PORT || 3000);

//static files
app.use(express.static(path.join(__dirname, 'public')));

        
// start the server
const server = app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});


const io = socketIO(server);
io.on('connection', (socket) => {
    console.log('new connection', socket.id);

    socket.on('chat:message', (data) => {
        console.log(data);
    });
});