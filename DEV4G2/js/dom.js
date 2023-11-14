console.log(document.getElementById("box").innerHTML)
console.log(document.getElementById("box").innerText)
document.getElementById("box").style.color = "brown"
//document.getElementById("box").style.backgroundColor = "pink"
document.getElementById("box").style.fontFamily = "Calibri"
var prenom = prompt("Prenom", "Dupond")
document.getElementById("prenom").value = prenom
var titre = document.getElementById("titre")

setColor(prenom)

function setColor(prenom) {
    if (prenom == "John")
        titre.style.color = "red"
    else if (prenom == "Dupond")
        titre.style.color = "green"
    else
        titre.style.color = "darkblue"
}