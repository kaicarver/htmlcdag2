<?php
// recuperer
$code = $_POST['code'];
$nom = $_POST['nom'];
$email = $_POST['email'];
//$photo = $_FILES['photo']; // traitement spécial pour récupérer le fichier
//$nomphoto = $_FILES['photo']["name"]; // traitement spécial pour récupérer le fichier
$nomphoto = $_FILES['photo']['name'];
$tmpphoto = $_FILES['photo']['tmp_name'];
// echo $tmpphoto;
move_uploaded_file($tmpphoto, "./images/".$nomphoto);

// connecter
require_once "connexion.php";

// preparer
$sql = "UPDATE etudiants SET nom = ?, email = ?, photo = ? WHERE code = ?";
$ps = $pdo->prepare($sql);
$params = array($nom, $email, $nomphoto, $code);

// executer
$ps->execute($params);

// rediriger
header("location:etudiants.php")
?>