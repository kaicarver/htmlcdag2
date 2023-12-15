<?php

$x = readline("Saisissez un nombre de depart pour voir les 10 suivants : ");
if (!is_numeric($x)) {
    $x = 0;
}
$i = $x;
echo "i = $i x = $x\n";
while ($i++ < $x + 10) {
    echo "$i ";
}
?>