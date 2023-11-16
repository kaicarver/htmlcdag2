document.getElementById("myTextarea").addEventListener('input', function () {
    var log = document.getElementById("log")
    var longueurMax = this.getAttribute('maxlength');
    var longueurCourante = this.value.length;
    if (longueurCourante >= longueurMax) {
        log.innerHTML = "oups vous ne pouvez plus taper"
    } else {
        log.innerHTML = longueurMax - longueurCourante + " caracteres restants"
    }
})