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

function changetext() {
    event.target.innerHTML = "ooops"
    event.target.color= "blue"
    event.target.backgroundColor= "yellow"
    event.target.transition= "all 5s ease-out"
 }
 document.getElementById("lorem").onclick = changetext