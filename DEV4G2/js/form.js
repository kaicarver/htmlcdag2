function controle(event) {
    event.preventDefault();
    var test = document.getElementById("userInput").value;
    var test2 = document.form1.input1.value;
    alert("Vous avez tapé " + test + "=" + test2);
}

document.getElementById("controle").onclick = controle;