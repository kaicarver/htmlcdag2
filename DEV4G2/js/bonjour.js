function bonj(event) {
    console.log(event)
    event.target.innerHTML = "Bojour " + nom
}
function carrefunc(event) {
    console.log(event)
    event.target.innerHTML = "merci davoir survole le carre,  " + nom
}

var nom = prompt("Nom", "Toto")

document.getElementById("bonjour").onclick = bonj
document.getElementById("carre").onmouseover = carrefunc