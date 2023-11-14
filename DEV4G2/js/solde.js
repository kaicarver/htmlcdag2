
// Prix à payer = Prix initial x (100 - réduction) / 100
function calculSolde(prix, remise) {
    var prixFinal = prix * (100 - remise) / 100;
    return prixFinal
  }
  
var prix = prompt("Prix initial", 100)
var remise = prompt("Pourcentage de remise", 10)

prixFinal = calculSolde(prix, remise);

document.getElementById("solde").innerHTML = "prix final : " + prixFinal + " € remise : " + (prix - prixFinal) + " € <br>sur prix initial de " + prix + " € avec remise de " + remise + "%"
