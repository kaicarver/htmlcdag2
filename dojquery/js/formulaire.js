$(document).ready(function () {
    $("#soutien").click(function () {
        if ($("#soutien").is(":checked")) {
            $("#merci").text("Merci bcp!");
        } else {
            $("#merci").text("Non merci bcp!");
        }
    })
});

