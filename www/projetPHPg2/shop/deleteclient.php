<?php
require_once "connect.php";
$id = $_GET['id'];
$ps = $pdo->prepare("delete FROM client where id = ?");
$ps->execute([$id]);
header("location: listclient.php");
?>