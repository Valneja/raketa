

var images =  [
    {
        url: 'https://services.sentinel-hub.com/ogc/wms/cd280189-7c51-45a6-ab05-f96a76067710?service=WMS&request=GetMap&layers=1_TRUE_COLOR&styles=&format=image/png&transparent=true&version=1.1.1&showlogo=false&name=Sentinel-2 L1C&height=512&width=512&pane=activeLayer&maxcc=100&time=2018-05-19/2018-05-19&srs=EPSG:3857&bbox=6124746.202434602,2876478.248427754,6144314.081675608,2896046.1276687565',
        options: ['Abu Dhabi', 'Singapore', 'Dubai', 'Bangkok'],
        answer: 2
    },
    {
        url: './assets/egipt.jpg',
        options: ['Sahara', 'Maroco', 'Iran', 'Egypt'],
        answer: 3
    }, 
    {
        url: './assets/ital1y.jpg',
        options: ['France', 'Spain', 'Italy', 'Slovenia'],
        answer: 2
    }
];

var name = '';
var players = [];
var question;
 var socket;

var login = function(_name) {
   socket = io.connect('http://localhost:3000', {reconnect: true});

    console.log("Socket setup");
    name = _name
    socket.on('connect', () => {
        console.log("I have connected to socket");
        console.log("fdsf");
        socket.emit('logon', name, 'ready');
    });
    socket.on('players', (data) => {
        players = data;
        console.log("->players", players);
    });
    socket.on('start', (data) => {
        document.getElementById("waiting").style.display="none";
        document.getElementById("game").style.display="block";


        question = 0;
        console.log('BEGIN');
        $("#answerBtns").children().each(function (index, element) {
            $(element).text(images[question].options[index]);
        });
    });
    socket.on('next', data => {
        if (question < images.length-1) {

            question++;
            console.log(images[question].url);
            $("#imgContainer").attr("src", images[question].url);
            var children = $('.overlay1').children('.overlay').css('opacity', 1);
            
            $("#answerBtns").children().each(function (index, element) {
                $(element).text(images[question].options[index]);
            });
            for (let i = 0; i < children.length; i++) {
                const element = children.get(i);
                setTimeout(function() {
                    var ran = Math.round(Math.random() * children.length );
                    while ( $(children.get(ran)).css('opacity') != 1 ) {
                        ran = Math.round(Math.random() * children.length );
                    }
                    $(children.get(ran)).css({'opacity': 0, transition : 'opacity 1s ease-in-out'});
                }, (i+1) * 1000); 
            }
        }

        else {
            console.log("end");
            document.getElementById("game").style.display="none";

            document.getElementById("end").style.display="block";

            setTimeout(function() {
                $("#proceed").show();
        
                $(".loading-finish").hide();
                
                $(".winner-name").show();
            }, 1000);
        }
    });
    socket.on('disconnect', () => {
        console.log("I have disconnected");
    });
}

var answer = function(index) {
    console.log(index);
    socket.emit('answer', index === images[question].answer);
    if ( index === images[question].answer ) {
    }
}

$(document).ready(function () {
    console.log("reeady", $('.overlay1')[0]);

    var children = $('.overlay1').children('.overlay');

    $("#imgContainer").attr("src", images[0].url);
      


      $("#login-button").click(function(){
        login( $("#player-name").val());   
       //$("#login").style.display="none";
       document.getElementById("login").style.display="none";

       document.getElementById("waiting").style.display="block";

      });

});

