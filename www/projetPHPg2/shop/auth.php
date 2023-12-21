<?php
$login = $_POST["login"];
// $pwd = md5($_POST["password"]);
$pwd = $_POST["password"];
require_once("connect.php");
$ps= $pdo->prepare("select * from client where login = ? and password = ?");
$params= array($login, $pwd);
$ps->execute($params);
if($user = $ps->fetch()){
    session_start();
    $_SESSION['PROFILE'] = $user;
    header("location: listclient.php");
} else {
    header("location: login.php");
}
?>