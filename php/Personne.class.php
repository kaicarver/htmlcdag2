<?php
// déclaration de la classe
class Personne {
    // attributs = variables
    private $nom;
    private $prenom;
    private $email;
    public $age;
    const NATION = "FR";

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
    public function __destruct() {
        echo "la personne $this->nom n'existe plus\n";
    }
    // getters/setters
    function __get($var) { return $this->$var; }
    function __set($var, $val) { $this->$var = $val; }

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
