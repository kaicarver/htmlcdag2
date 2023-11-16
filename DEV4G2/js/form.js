/* function controle(event) {
    event.preventDefault();
    var test = document.getElementById("userInput").value;
    var test2 = document.form1.input1.value;
    alert("Vous avez tapé " + test + "=" + test2);
} */

function afficher(event) {
    var test = document.getElementById("userInput2").value;
    document.getElementById("userOutput2").value = test;
}

document.getElementById("controle2").onclick = afficher;