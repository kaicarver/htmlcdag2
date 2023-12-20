<?php
$login = $_POST["login"];
$pwd = md5($_POST["password"]);
require_once("connexion.php");
$ps= $pdo->prepare("select * from users where LOGIN=? AND PASSWORD=?");
$params= array($login,$pwd);
$ps->execute($params);
if($user = $ps->fetch()){
    session_start();
    $_SESSION['PROFILE']=$user;
    header("location: etudiants.php");
}else{
    header("location: login.php");
}
?>