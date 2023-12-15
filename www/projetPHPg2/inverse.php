<?php
// fonction qui inverse le contenu de deux valeurs passées en argument
function inverse(&$x, &$y) {
    list ($x, $y) = [$y, $x];
}
$x = 5;
$y = 17;
echo "x: $x, y: $y<br>\n";
inverse($x, $y);
echo "x: $x, y: $y<br>\n";
?>