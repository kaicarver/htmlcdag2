<?php

require 'Personne.php';

// instancier (créer) un objet = une variable
$p1 = new Personne("Dupont", "Jean", "jean@gmail.com", 42);
var_dump($p1);
// foreach ($p1 as $key => $val) {
//     echo "$key = $val\n";
// }
$p1->afficher();
$p1->afficherFor();

$p1->setNom('Dupontel');
$p1->age = 42.1;

$p1->afficherFor();
var_dump($p1);

// require 'PersonnePublic.php';
// $p2 = new PersonnePublic("Dupontxx", "Jeanxx", "jeanxx@gmail.com");
// foreach ($p2 as $key => $val) {
//     echo "xx $key = $val\n";
// }
?>