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
});

