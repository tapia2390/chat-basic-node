const socket = io()

let message = document.getElementById('message');
let username = document.getElementById('username');
let btnSend = document.getElementById('send');
let output = document.getElementById('output');
//let actions = document.getElementById('actions');


btnSend.addEventListener('click', function () {
    const dataChat = {
        message: message.value,
        username:username.value
    }

    socket.emit('chat:message',dataChat);

});