<?php
$notes = array();
$size = 12;
echo  "Saisir $size notes : \n";
for($i = 0; $i < $size; $i++) {
    $n = readline("note " . ($i+1) . " : ");
    if (!is_numeric($n)) {
        $n = $i;
    }
    $notes[$i] = $n;
}
echo  "$size notes : \n";
$total = 0;
for($i = 0; $i < $size; $i++) {
    echo $notes[$i] . " ";
    $total += $notes[$i];
}
echo "\nTotal des notes : $total";
?>