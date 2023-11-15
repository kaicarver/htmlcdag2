function bonj(event) {
    console.log(event)
    event.target.innerHTML = "Bojour " + nom
}
function carrefunc(event) {
    console.log(event)
    event.target.innerHTML = "merci davoir survole le carre,  " + nom
}
function survol(event) {
    console.log(event)
    event.target.innerHTML = "merci davoir survolé"
}

document.getElementById("survol").addEventListener("mouseover", survol)
document.getElementById("stop").onclick = function(){
    document.getElementById("survol").removeEventListener("mouseover", survol)
}
document.getElementById("start").onclick = function(){
    document.getElementById("survol").addEventListener("mouseover", survol)
}
