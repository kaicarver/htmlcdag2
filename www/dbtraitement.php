<?php
// recuperer les donnees du formulaire
$nom = $_POST['nom'];
$prenom = $_POST['prenom'];

// etablir connexion vers la base de donnees
$connexion = new mysqli("localhost", "root", "", "interactionsqlphp");

if ($connexion->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$count = $_POST['count'];

for ($i = 0; $i < $count; $i++) {
    // requete sql pour inserer un client
    $sql = "insert into client (nom, prenom) values ('$nom', '$prenom');";
    $connexion->query($sql);
}

// fermer la connexion
$connexion->close();

// rediriger vers une page
header("location: listeclient.php");
?>