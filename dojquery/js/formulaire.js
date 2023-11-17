$(document).ready(function () {
    $("#soutien").click(function () {
        if ($("#soutien").is(":checked")) {
            $("#merci").text("Merci bcp!");
            $("#merci").css("background-color", "aquamarine");
        } else {
            $("#merci").text("");
            $("#merci").css("background-color", "white");
        }
    })
    $("#dark").click(function (event) {
        event.preventDefault();
        $("body").css("background-color", "black");
        $("body").css("color", "white");
    })    
    $("#lite").click(function (event) {
        $("body").css("background-color", "white");
        $("body").css("color", "black");
    })
    $(".button").mouseover(function (event) {
        $(this).css("color", "red");
    });
    $(".button").mouseout(function (event) {
        $(this).css("color", "black");
    });
});

