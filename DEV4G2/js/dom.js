// console.log(document.getElementById("box").innerHTML)
// console.log(document.getElementById("box").innerText)
// document.getElementById("box").style.color = "brown"
// //document.getElementById("box").style.backgroundColor = "pink"
// document.getElementById("box").style.fontFamily = "Calibri"
// var prenom = prompt("Prenom", "Dupond")
// document.getElementById("prenom").value = prenom
// var titre = document.getElementById("titre")

//setColor(prenom)

// do {
//     prenom = document.getElementById("prenom").value
//     setColor(prenom)
// } while (prenom)

function setColor(prenom) {
    if (prenom.toLowerCase() == "john")
        titre.style.color = "red"
    else if (prenom == "Dupond")
        titre.style.color = "green"
    else
        titre.style.color = "darkblue"
}

// document.getElementById("box").classList.toggle("bgBlue")
// document.getElementById("titre").classList.toggle("bgBlue")

/* if (confirm("choix")) {
    document.body.classList.add("class1")
} else {
    document.body.classList.add("class2")
} */

//document.getElementById("titre").onclick = changeText

document.getElementById("titre").onmousedown = mDown
document.getElementById("titre").onmouseup = mUp
document.getElementById("titre3").onmousedown = mDown
document.getElementById("titre3").onmouseup = mUp

function mDown(event) {
    event.target.style.backgroundColor = "blue"
    event.target.style.color = "yellow"
    event.target.innerHTML = "click down"
}
function mUp(event) {
    event.target.style.backgroundColor = "red"
    event.target.style.color = "white"
    event.target.innerHTML = "click up"
}

function changeText(event) {
    console.log(event)
    event.target.innerHTML += ' Ooops 2'
}