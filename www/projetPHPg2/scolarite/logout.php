<?php
session_start();
unset($_SESSION['PROFILE']);
// on peut aussi faire ça, même si la doc dit :
//   Note: Vous n'avez pas besoin d'appeler session_destroy() depuis le programme généralement. 
//   Nettoyer le tableau $_SESSION plutôt que de détruire les données de session.
session_destroy();
header("location: login.php");
?>