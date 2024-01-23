<?php

class Geometrie {
    const PII = 3.14;
    public static $surfaceCercle;
    public static $surfaceRectangle;
    public static function surfaceCercle($rayon) {
        self::$surfaceCercle = self::PII * $rayon * $rayon;
    }
    public static function perimetreCercle($rayon) {
        return 2 * self::PII * $rayon;
    }
    public static function surfaceRectangle($l1, $l2) {
        self::$surfaceRectangle = $l1 * $l2;
        return self::$surfaceRectangle;
    }
    public static function perimetreRectangle($l1, $l2) {
        return 2 * ($l1 + $l2);
    }
}

// $appart1 = Appartement::calculerSurfaceAppartement(array(15 => 10, 5 => 5, 15 => 13));
class Appartement extends Geometrie {
    static function calculerSurfaceAppartement($tableau) {
        $surface = 0;
        foreach ($tableau as $l1 => $l2) {
            $surface += parent::surfaceRectangle($l1, $l2);
        }
        return $surface;
    }
}

$rayon = 12;
Geometrie::surfaceCercle($rayon);
$surface = Geometrie::$surfaceCercle;
echo "rayon du cercle : $rayon\n";
echo "surface : $surface\n";
echo "perimetre : ", Geometrie::perimetreCercle($rayon), "\n";
$l1 = 15;
$l2 = 10;
Geometrie::surfaceRectangle($l1, $l2);
$surface = Geometrie::$surfaceRectangle;
echo "dim du rectangle : $l1 x $l2\n";
echo "surface : $surface\n";
echo "perimetre : ", Geometrie::perimetreRectangle($l1, $l2), "\n";

$appart1 = array(15 => 10, 5 => 5, 16 => 13);
var_dump($appart1);
echo "surface appart : ", Appartement::calculerSurfaceAppartement($appart1), "\n";

