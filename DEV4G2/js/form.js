function controle(event) {
    event.preventDefault()
    var test = document.getElementById("userInput").value;
    alert("Vous avex tape " + test)
}

document.getElementById("controle").onclick = controle;