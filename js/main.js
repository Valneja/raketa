

$(document).ready(function () {
    console.log("reeady", $('.overlay1')[0]);

    var children = $('.overlay1').children('.overlay');

    for (let i = 0; i < children.length; i++) {
        const element = children.get(i);
        console.log(element);
        setTimeout(function() {
            var ran = Math.round(Math.random() * children.length );
            while ( $(children.get(ran)).css('opacity') != 1 ) {
                ran = Math.round(Math.random() * children.length );
            }
            $(children.get(ran)).css('opacity', 0);
        }, (i+1) * 3000); 
    }
});