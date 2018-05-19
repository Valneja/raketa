
var socket = io.connect('http://localhost:3000', {reconnect: true});

console.log("Socket setup");
socket.on('connect', () => {
    console.log("I have connected to socket");
    console.log("fdsf");
    socket.emit('TEST', 'me', 'test msg');
});
socket.on('event', (data) => {
    console.log("Event");
});
socket.on('disconnect', () => {
    console.log("I have disconnected");
});