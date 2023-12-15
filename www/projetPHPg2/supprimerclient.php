<?php
// recuperer les donnees du formulaire
$id = $_GET['code'];

// etablir connexion vers la base de donnees
$connexion = new mysqli("localhost", "root", "", "interactionsqlphp");

if ($connexion->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// requete sql pour inserer un client
$sql = "delete from client where id=$id;";
$connexion->query($sql);

// fermer la connexion
$connexion->close();

// rediriger vers une page
header("location: listeclient.php");
?>