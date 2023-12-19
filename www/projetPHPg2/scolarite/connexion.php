<?php

try {
    $strconnect = "mysql:host=localhost;port=3306;dbname=scolarite";
    $user = 'root';
    $password = '';
    $pdo = new PDO($strconnect, $user, $password);
} catch (PDOException $e) {
    die("Message d'erreur " . $e->getMessage());
}

?>