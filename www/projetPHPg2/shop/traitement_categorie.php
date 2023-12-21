<?php
    $nom=$_POST['nomCat'];
    $descriptif=$_POST['descriptif'];

    require_once("connexion.php");
    $ps = $pdo->prepare("INSERT INTO categorie (nomCat,descriptif) VALUES (?,?)");
    $params= array($nom,$descriptif);

    $ps->execute($params);
    header("location: index.php");
?>