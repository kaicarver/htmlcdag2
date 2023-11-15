var lorem = document.getElementById("lorem")
lorem.onclick = adjustsize
var age = prompt("age", 77)
function adjustsize(event) {
    if (age > 60) {
        lorem.style.fontSize = "70px"
    } else if (age > 12) {
        lorem.style.fontSize = "24px"
    } else {
        lorem.style.fontSize = "12px"
    }
}
