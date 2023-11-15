var nom = prompt("Nom", "Toto")

document.getElementById("bonjour").onclick = bonj

function bonj(event) {
    console.log(event)
    event.target.innerHTML = "Bojour " + nom
}