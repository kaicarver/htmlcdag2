<?php
$login = $_POST['login'];
$password = md5($_POST['password']);
echo $password, "<br />";
require_once("connexion.php");
$ps = $pdo->prepare("select * from users where login = ? and password = ?");
$params = array($login, $password);
$ps->execute($params);
// echo $password, "<br />";
if ($user = $ps->fetch()) {
    session_start();
    $_SESSION['PROFILE'] = $user;
    echo "SUCCESS";	
    header('location: etudiants.php');
} else {
    echo "FAILURE";	
    header('location: login.php');
}
?>
