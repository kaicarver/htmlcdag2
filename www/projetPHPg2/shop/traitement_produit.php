<?php
$nom=$_POST['designation'];
$prix=$_POST['prix'];
$photoname=$_FILES['photo']['name'];
$tempphoto = $_FILES['photo']['tmp_name'];
move_uploaded_file($tempphoto, "./IMAGE/".$photoname);
$idCat = $_POST['idCat'];

require_once("connexion.php");

$ps = $pdo->prepare("INSERT INTO produit(designation,prix,photo,idCat) VALUES (?,?,?,?)");
$params = array($nom,$prix,$photoname,$idCat);
$ps->execute($params);

header("location: produit.php");
?>