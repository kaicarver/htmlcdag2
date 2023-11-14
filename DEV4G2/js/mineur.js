function checkAge(age, minAge) {
    if (age < minAge) {
        alert("mineur site BLOQUE")
    } else {
        alert("vous etes majeur")
    }
    document.getElementById("age").innerHTML = age;
}
do {
    var age = prompt("Age", 18)
} while (age.length < 1 || isNaN(age+1))

checkAge(age, 18)