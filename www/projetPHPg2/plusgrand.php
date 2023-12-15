<?php
$i = 0;
$n = 3;
$log = "";
echo "on va trouver le plus grand de $n nombres\n";
$x = readline("Saisissez le nombre $i : ");
$max = $x;
while ($i++ < $n) {
    $x = readline("Saisissez le nombre $i : ");

    $log .= $x . " - ";
    if (!is_numeric($x)) {
        $x = 0;
    }
    if ($x > $max) {
        $max = $x;
    }

}
echo "le plus grand de ($log)\nc'est : $max";
?>