<?php
while (true) {
    $x = readline("Saisissez un nombre entre 10 et 20 : ");
    if (!is_numeric($x)) {
        $x = 10;
    }
    if ($x < 10) {
        echo "plus grand ! ";
    } elseif ($x > 20) {
        echo "plus petit ! ";
    } else {
        echo "merci d'avoir choisi $x.";
        break;
    }
}
?>