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
        $("#dark").hide();
        $("#lite").show();
    })    
    $("#lite").click(function (event) {
        $("body").css("background-color", "white");
        $("body").css("color", "black");
        $("#lite").hide();
        $("#dark").show();
    })
    $(".button").mouseover(function (event) {
        $(this).css("border-color", "red");
    });
    $("#dark").mouseout(function (event) {
        $(this).css("border-color", "black");
    });
    $("#lite").mouseout(function (event) {
        $(this).css("border-color", "white");
    });

    $("#lite").hide();
});

