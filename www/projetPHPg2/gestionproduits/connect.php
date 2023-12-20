<?php
$host = "localhost";
$port = 3306;
$base = "gestionproduits";
$dsn = "mysql:host=$host;port=$port;dbname=$base";
$user = 'root';
$password = '';

try {
    $pdo = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    die("Message d'erreur " . $e->getMessage());
}
?>