<?php

$prenoms = ["sana", "solyce", "katys", "foo", "bar"];
$ages = ["sana" => 60, "solyce" => 30, "katys"  => 12, "foo"  => -1, "bar" => -42];

for($i = 0; $i < count($prenoms); $i++) {
    echo $prenoms[$i] . " ";
}
echo "\n................................................................\n";
foreach ($ages as $key => $val) {
    echo "$key: $val\n";
}
?>