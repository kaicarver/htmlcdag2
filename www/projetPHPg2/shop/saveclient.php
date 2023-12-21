<?php
if (isset($_POST['Ajouter']) || isset($_POST['Modifier'])) {
    require_once "connect.php";
    if (isset($_POST['Ajouter'])) {
        $sql = "insert into client (nom, prenom, login, email, password, role) values (?, ?, ?, ?, ?, ?)";
    } else {
        $sql = "update client set nom=?, prenom=?, login=?, email=?, password=?, role=? where id = ?";
    }
    $ps = $pdo->prepare($sql);
    if (isset($_POST['Ajouter'])) {
        $ps->execute([$_POST['nom'], $_POST['prenom'], $_POST['login'], $_POST['email'], $_POST['password'], $_POST['role']]);
    } else {
        $ps->execute([$_POST['nom'], $_POST['prenom'], $_POST['login'], $_POST['email'], $_POST['password'], $_POST['role'], $_POST['id']]);
    }
    header("location: listclient.php");
}
?>