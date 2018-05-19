
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

let players = [];

io.on('connection', socket => {
   console.log('connection');

  socket.on('logon', (from, msg) => {
	players.push({
		id: socket.id,
		name: from,
		score: 0
	});
	console.log('Login: ', from, players);
	if ( players.length === 2) {
		console.log("Play!");
		io.emit("players", players);
	}
  });

  socket.on('disconnect', function() {
	  console.log(socket.name, socket.id);
	  for (let i = 0; i < players.length; i++) {
		  const player = players[i];
			if ( player.id === socket.id ) {
				players.splice( i, 1);
				io.emit("players", players);		
			}
	  }
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});