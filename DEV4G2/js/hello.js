// var myVar = "Ma première variable";
// var myVar2 = "Hello world !";

// var nbVar = 1, strVar = "Hello", boolOk = true;

// alert(typeof(nbVar) + "\n" + typeof(strVar) + " " + typeof(boolOk));

var boolConfirm = confirm("Je peux demander votre prénom ?");
if (boolConfirm == true) {
    var prenom= prompt("Veuillez saisir votre prénom");
    alert(prenom);
} else {
    alert("ok salut !");
}
