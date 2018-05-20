

var images =  [
    {
        url: 'https://services.sentinel-hub.com/ogc/wms/cd280189-7c51-45a6-ab05-f96a76067710?service=WMS&request=GetMap&layers=1_TRUE_COLOR&styles=&format=image/png&transparent=true&version=1.1.1&showlogo=false&name=Sentinel-2 L1C&height=512&width=512&pane=activeLayer&maxcc=100&time=2018-05-19/2018-05-19&srs=EPSG:3857&bbox=6124746.202434602,2876478.248427754,6144314.081675608,2896046.1276687565',
        options: ['Abu Dhabi', 'Singapore', 'Dubai', 'Bangkok'],
        answer: 2
    },
    {
        url: 'https://services.sentinel-hub.com/ogc/wms/1352ed15-d977-4d89-b0fa-f97964c57178?service=WMS&request=GetMap&layers=TRUE_COLOR&styles=&format=image/png&transparent=true&version=1.1.1&showlogo=false&name=Simple WMS instance&height=512&width=512&pane=activeLayer&maxcc=100&time=2018-05-18/2018-05-18&srs=EPSG:3857&bbox=-12406035.438797247,4422340.708467157,-12366899.680315236,4461476.4669491695',
        options: ['Sahara', 'Fish River Canyon', 'Niagara Gorge', 'Grand Canyon'],
        answer: 0
    }, 
    {
        url: 'https://services.sentinel-hub.com/ogc/wms/1352ed15-d977-4d89-b0fa-f97964c57178?service=WMS&request=GetMap&layers=TRUE_COLOR&styles=&format=image/png&transparent=true&version=1.1.1&showlogo=false&name=Simple WMS instance&height=512&width=512&pane=activeLayer&maxcc=100&time=2018-05-18/2018-05-18&srs=EPSG:3857&bbox=-12406035.438797247,4422340.708467157,-12366899.680315236,4461476.4669491695',
        options: ['Sahara', 'Fish River Canyon', 'Niagara Gorge', 'Grand Canyon'],
        answer: 0
    },
    {
        url: 'https://services.sentinel-hub.com/ogc/wms/1352ed15-d977-4d89-b0fa-f97964c57178?service=WMS&request=GetMap&layers=TRUE_COLOR&styles=&format=image/png&transparent=true&version=1.1.1&showlogo=false&name=Simple WMS instance&height=512&width=512&pane=activeLayer&maxcc=100&time=2018-05-18/2018-05-18&srs=EPSG:3857&bbox=-12406035.438797247,4422340.708467157,-12366899.680315236,4461476.4669491695',
        options: ['Sahara', 'Fish River Canyon', 'Niagara Gorge', 'Grand Canyon'],
        answer: 0
    }
];

$(document).ready(function () {
    console.log("reeady", $('.overlay1')[0]);

    var children = $('.overlay1').children('.overlay');

    for (let i = 0; i < children.length; i++) {
        const element = children.get(i);
        setTimeout(function() {
            var ran = Math.round(Math.random() * children.length );
            while ( $(children.get(ran)).css('opacity') != 1 ) {
                ran = Math.round(Math.random() * children.length );
            }
            $(children.get(ran)).css('opacity', 0);
        }, (i+1) * 3000); 
    }

    setTimeout(function() {
        $("#proceed").show();

        $(".loading-finish").hide();
        
        $(".winner-name").show();
    }, 1000);

    $("#imgContainer").attr("src", images[0].url);
      
});