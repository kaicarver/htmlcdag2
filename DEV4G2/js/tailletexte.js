document.getElementById("lorem").onclick = adjustsize
function adjustsize(event) {
    var age = prompt("age", 77)
    if (age > 60) {
        event.target.style.fontSize = "70px"
    } else if (age > 12) {
        event.target.style.fontSize = "24px"
    } else {
        event.target.style.fontSize = "12px"
    }
}
