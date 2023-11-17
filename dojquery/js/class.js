$(document).ready(function() {
    $("p").addClass('bgRed')
    $("h1").removeClass('bgRed')
    $("p").css("background-color", "chocolate");
    $("p").css("color", "white");
    $("p").css({ "background-color": "chocolate", "color": "white" });

    $("h1").click(function () {
        alert("Hello");
     })
     $("h2").dblclick(function () {
        alert("Double!");
     })
})

function dim() {
    $("#d").css({ height: '200px', width: '200px' });
}
function bg() {
    $("#d").css({ "background-color": "chocolate", "color": "white"	});
}
var width = 5;
function border() {
    $("#d").css({ border: 'solid red '+ (width+=2*width) +'px' });
}