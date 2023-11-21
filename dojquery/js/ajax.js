$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/posts/1", function(data, status) {
        console.log(data, status);
        $("#div1").html(data.body);
    });
});