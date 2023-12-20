<?php
require_once "connect.php";
$id = $_GET['id'];
$ps = $pdo->prepare("delete FROM produits where id = ?");
$ps->execute([$id]);
header("location: list.php");
?>