<?php
// recuperer
$code = $_GET['code'];
// connecter
require_once "connexion.php";
$params = array($code);
$psSelect = $pdo->prepare("select * FROM etudiants WHERE code = ?");
$psSelect->execute($params);
$photo = $psSelect->fetch()['photo'];
$ps = $pdo->prepare("DELETE FROM etudiants WHERE code = ?");
$ps->execute($params);
unlink("./images/$photo");
header("location: etudiants.php")
?>