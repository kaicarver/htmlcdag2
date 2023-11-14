do {
    var nom = prompt("Nom (au moins 4 lettres)", "Tot")
} while (nom.length < 4) 

document.getElementById("nom").innerHTML = nom;
for (var i = 0; i < 10; i++) {
    console.log(i + ": " + nom)
}
