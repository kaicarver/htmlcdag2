document.addEventListener("click", function(event){
    console.log(event)
    b = document.getElementById("ball")
    b.style.transform =
        "translateX(" + (event.clientX - 25) + "px)" +
        "translateY(" + (event.clientY - 25) + "px)"
        b.style.transition = "transform 1s"

})