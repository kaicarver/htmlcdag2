<?php
try{
    $connexion = "mysql:host=localhost;port=3306;dbname=shop;";
    $pdo = new PDO($connexion,'root','');
    }
    catch(PDOException $err){
        die("Message d'erreur : ".$err->getMessage());
    }
?>