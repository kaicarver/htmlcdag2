<?php
class Rectangle {
    private $longueur;
    private $largeur;
    function getLongueur() { return $this->longueur; }
    function getLargeur() { return $this->largeur; }
    function setLongueur($x) { $this->longueur = $x; }
    function setLargeur($x) { $this->largeur = $x; }
    function __construct($long = 0, $larg = 0) {
        $this->setLongueur($long);
        $this->setLargeur($larg);
    }
    function toString() { return "$this->longueur x $this->largeur"; }
    function affiche() { echo $this->getLongueur() . " x " . $this->getLargeur() . "\n"; }
}

$long = 24;
$larg = 42;
$r1 = new Rectangle();
echo $r1->getLongueur() . " x " . $r1->getLargeur() . "\n";
$r1->setLongueur($long * 10);
$r1->setLargeur($long * 10);
echo $r1->getLongueur() . " x " . $r1->getLargeur() . "\n";

$long = 2.4;
$larg = 4.2;
$r2 = new Rectangle();
$r2->affiche();
$r2->setLongueur($long);
$r2->setLargeur($long);
$r2->affiche();
