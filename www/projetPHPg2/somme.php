<?php

echo "<br>\nle tableau 1 : ";
$tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
print_r($tab1);
echo "<br>\nle tableau 2 : ";
$tab2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
print_r($tab2);
echo "<br>\ntab1 + tab2 : ";
$tabsum = [];
for ($i = 0; $i < count($tab1); $i++) {
    $tabsum[$i] = $tab1[$i] + $tab2[$i];
}
// var_dump($tabsum);
print_r($tabsum);

?>