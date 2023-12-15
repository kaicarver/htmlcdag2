<?php
define("PI", 3.14);
function cercle($r) {
    echo "calcul surface et périmètre d'un cercle de rayon $r<br>\n";
    // return [PI * $r * $r, 2 * PI * $r];
    return ['surface' => PI * $r * $r, 'perimetre' => 2 * PI * $r];
}
var_dump(cercle(1));
var_dump(cercle(2));
var_dump(cercle(3));
var_dump(cercle(12));
?>
