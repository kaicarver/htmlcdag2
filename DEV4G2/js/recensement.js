var annee = prompt("Annee de naissance")
var age = 2023 - annee
while (isNaN(age) || annee < 1900) {
    annee = prompt("Annee de naissance valide please", 2023)
    age = 2023 - annee
}
if (age > 16) {
    alert("Veuillez faire votre recensement")
} else {
    alert("Vous ferez votre recensement dans " + (16-age) + " ans")
}