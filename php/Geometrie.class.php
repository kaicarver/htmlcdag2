<?php

class Geometrie {
    const PII = 3.14;
    public static $surfaceCercle;
    public static function surfaceCercle($rayon) {
        self::$surfaceCercle = self::PII * $rayon * $rayon;
    }
    public static function perimetreCercle($rayon) {
        return 2 * self::PII * $rayon;
    }
}

$rayon = 12;
Geometrie::surfaceCercle($rayon);
$surface = Geometrie::$surfaceCercle;
echo "rayon du cercle : $rayon\n";
echo "surface : $surface\n";
echo "perimetre : ", Geometrie::perimetreCercle($rayon), "\n";
