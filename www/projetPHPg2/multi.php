<?php

$multi1 = [ 
    "smith" => ["John", "Paris", 12],
    "dupont" => ["Jean", "Lille", 19],
];

$multi2 = [ 
    "smith" => ["John" => ["Paris", 12]],
    "dupont" => ["Jean" => ["Lille", 19]],
];

print_r($multi1);
print_r($multi2);

echo "\n\nmulti1 : \n";	
foreach ($multi1 as $key => $value) {
    echo "\n", $key, " : ";
    foreach ($value as $val) { print $val; }	
}

echo "\n\nmulti2 : \n";	
foreach ($multi2 as $key => $value) {
    echo "\n", $key, " : ";
    foreach ($value as $key2 => $val2) {
        echo "\n", $key2, " : ";
        foreach ($val2 as $val3) { print $val3; }
    }	
}
?>