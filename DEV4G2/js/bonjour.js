function bonj(event) {
    console.log(event)
    event.target.innerHTML = "Bojour " + nom
}
function carrefunc(event) {
    console.log(event)
    event.target.innerHTML = "merci davoir survole le carre,  " + nom
}
function survol(obj) {
    console.log(obj)
    obj.innerHTML = "merci davoir survolé"
}

//document.getElementById("survol").addEventListener("onmouseover", survol)
document.getElementById("stop").onclick = function(){
    document.getElementById("survol").removeEventListener("onmouseover", survol)
}
