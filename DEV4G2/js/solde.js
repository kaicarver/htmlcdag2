
// Prix à payer = Prix initial x (100 - réduction) / 100
function calculSolde(prix, remise) {
    var prixFinal = prix * (100 - remise) / 100;
    return "prix final : " + prixFinal + " € remise : " + (prix - prixFinal) + " € <br>sur prix initial de " + prix + " € avec remise de " + remise + "%"
  }
  
var prix = prompt("Prix initial", 100)
var remise = prompt("Pourcentage de remise", 10)

document.getElementById("solde").innerHTML = calculSolde(prix, remise);
