<?php
// déclaration de la classe
class Personne {
    // attributs = variables
    private $nom;
    private $prenom;
    private $email;

    // méthodes = fonctions
    // constructeur
    public function __construct($n, $p, $e) {
        // affecter des valeurs aux attributs
        $this->nom = $n;
        $this->prenom = $p;
        $this->email = $e;
    }
    function afficher() {
        echo "nom = $this->nom\n";
        echo "prenom = $this->prenom\n";
        echo "email = $this->email\n";
    }
}
