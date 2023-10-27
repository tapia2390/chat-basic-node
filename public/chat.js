const socket = io()

let message = document.getElementById('message');
let username = document.getElementById('username');
let btnSend = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');


btnSend.addEventListener('click', function () {
    const dataChat = {
        message: message.value,
        username:username.value
    }

    socket.emit('chat:message',dataChat);

});


message.addEventListener('keypress', function () {
    socket.emit('chat:typing', username.value);
});

socket.on('chat:messageServer', function(data) {

    actions.innerHTML +='';
    const fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    const minutosActuales = fechaActual.getMinutes();
    const segundosActuales = fechaActual.getSeconds();


    if(username.value === data.username){
        output.innerHTML +=`

        <li class="mar-btm">
            <div class="media-left">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="img-circle img-sm" alt="Profile Picture">
            </div>
            <div class="media-body pad-hor">
            <div class="speech">
            <a href="#" class="media-heading">${data.username}</a>
            <p>${data.message}</p>
            <p class="speech-time">
            <i class="fa fa-clock-o fa-fw"></i> ${horaActual}:${minutosActuales}:${segundosActuales}
            </p>
            </div>
            </div>
            </li>`
    }else{
        output.innerHTML +=`
        <li class="mar-btm">
        <div class="media-right">
        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="img-circle img-sm" alt="Profile Picture">
        </div>
        <div class="media-body pad-hor speech-right">
        <div class="speech">
        <a href="#" class="media-heading">${data.username}</a>
        <p>${data.message}</p>
        <p class="speech-time">
        <i class="fa fa-clock-o fa-fw"></i> ${horaActual}:${minutosActuales}:${segundosActuales}
        </p>
        </div>
        </div>
        </li>`
    }

});

socket.on('chat:typingServer', function(data) {
    console.log(data);
    actions.innerHTML =`
<p class="mar-btm">
<em> ${data} is typing a message. </em>
</p>`
});
