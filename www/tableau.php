<?php
$tab = [
    "back" => [1,2,3,4,5],
    "front" => [6,7,8,9,10]
];
function afficherTableau($tab) {
    echo "<table border width=100%>\n";
    foreach ($tab as $clef => $valeur) {
        echo "<tr>\n";
        echo "<td>$clef</td>\n";
        foreach ($valeur as $val) {
            echo "<td>$val</td>\n";
        }
    }
}
afficherTableau($tab);
?>