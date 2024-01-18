<?php

require 'Personne.php';

// instancier (créer) un objet = une variable
$p1 = new Personne("Dupont", "Jean", "jean@gmail.com");
var_dump($p1);
// foreach ($p1 as $key => $val) {
//     echo "$key = $val\n";
// }
$p1->afficher();
?>