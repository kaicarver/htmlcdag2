<?php
// recuperer
$code = $_GET['code'];
// connecter
require_once "connexion.php";
// preparer
$ps = $pdo->prepare("DELETE FROM etudiants WHERE code = ?");
$params = array($code);
// executer
$ps->execute($params);
//$ps->execute([$code]); // marche aussi
// rediriger
header("location: etudiants.php")
?>