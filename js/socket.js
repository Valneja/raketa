
var socket = io.connect('http://localhost:3000', {reconnect: true});

console.log("Socket setup");
socket.on('connect', () => {
    console.log("I have connected to socket");
    console.log("fdsf");
    socket.emit('logon', 'me', 'test msg');
});
socket.on('players', (data) => {
    console.log("players", data);
});
socket.on('disconnect', () => {
    console.log("I have disconnected");
});