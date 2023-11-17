$(document).ready(function () {
    var clicked = false;
    $("#soutien").click(function () {
        if (clicked) {
            $("#merci").text("");
        } else {
            $("#merci").text("Merci");
        }
        if ($("#soutien").is(":checked")) {
            $("#merci").text("Merci bcp!");
        }
        clicked =!clicked;
    })
});

