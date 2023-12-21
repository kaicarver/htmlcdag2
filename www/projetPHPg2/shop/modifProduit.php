<?php
$nom=$_POST['designation'];
$prix=$_POST['prix'];
$photoname=$_FILES['photo']['name'];
$tempfile = $_FILES['photo']['tmp_name'];
move_uploaded_file($tempfile, "./IMAGE/".$photoname);
$idCat = $_POST['idCat'];

require_once("connexion.php");
if($photoname == ""){
    $ps = $pdo->prepare("UPDATE produit SET designation=?,prix=?, idCat=? WHERE id=?");
    $params = array($nom,$prix,$idCat,$id);
}else {
    move_uploaded_file($tempfile, "./IMAGE/".$photoname);
    $ps = $pdo->prepare("UPDATE produit SET designation=?,prix=?,photo=?, idCat=? WHERE code=?");
    $params = array($nom,$prix,$photoname,$idCat,$id);
}

$ps->execute($params);

header("location: produit.php");
?>