
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

let players = [];

app.use(express.static(__dirname + './../'));

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
server.listen(3000, () => {
	console.log("Listening on 3000");
});
