<?php
// déclaration de la classe
class Personne {
    // attributs = variables
    private $nom;
    private $prenom;
    private $email;
    public $age;

    // méthodes = fonctions
    // constructeur
    public function __construct($n, $p, $e, $a) {
        // affecter des valeurs aux attributs
        $this->nom = $n;
        $this->prenom = $p;
        $this->email = $e;
        $this->age = $a;
        $this->foo = "attribut non déclaré de valeur Foo!";
    }
    // getter permet de recupérer la valeur d'un attribut privé
    function getNom() {
        return $this->nom;
    }
    function getPrenom() {
        return $this->prenom;
    }
    function getEmail() {
        return $this->email;
    }
    function getAge() {
        return $this->age;
    }
    // setter affecter une valeur à un attribut privé
    function setNom($n) {
        $this->nom = $n;
    }
    function afficher() {
        echo "nom = $this->nom\n";
        echo "prenom = $this->prenom\n";
        echo "email = $this->email\n";
        echo "age = $this->age\n";
    }
    function afficherFor() {
        foreach ($this as $key => $val) {
            echo "$key = $val\n";
        }
    }
}
