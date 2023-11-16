
function reponse(myform) {
    if (myform.choix[0].checked && myform.choix[1].checked && !myform.choix[2].checked)
        alert("Merci");
    else 
        alert("Non")
}