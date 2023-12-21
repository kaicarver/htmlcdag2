<?php 
$id=$_GET['id'];
require_once("connexion.php");

$ps = $pdo->prepare("DELETE FROM produit WHERE id=?");
$param = array($id);
$ps->execute($param);

header("location: produit.php");

?>