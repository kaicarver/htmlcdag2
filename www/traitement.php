<?php


$nom = $_GET['nom'];
$sujet = $_GET['sujet'];
$sexe = $_GET['sexe'];
$comp = $_GET['comp'];

var_dump($nom, $sujet, $sexe, $comp);

foreach ($comp as $val) {
    echo "$val<br/>\n";
}

// 1 recuperer donnees

// 2 preparer les donnees

// 3 stocker les donnees dans la BDD

// 4 redirection vers une autre page
//header("location: liste.php");

// debug
echo "\$_GET : ";
var_dump($_GET);
echo "\$_POST : ";
var_dump($_POST);
echo "\$_REQUEST : ";
var_dump($_REQUEST);
?>