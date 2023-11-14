
// Prix à payer = Prix initial x (100 - réduction) / 100
function calculSolde(prix, remise) {
    return prix * (100 - remise) / 100
  }
  
var prix = prompt("Prix initial", 100)
var remise = prompt("Pourcentage de remise", 10)

document.getElementById("solde").innerHTML = calculSolde(prix, remise);
