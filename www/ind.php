<?php  ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
</head>
<body>
    <!-- en tete -->
    <?php
        include "header.html";

        echo "<h1>Bienv a mo sit web</h1>";
        echo "bon" . "jour<br>";
        $a=" 5.2 ";
        $b="      6.5     ";
        echo "somme est : ".$a+$b.$c;

        echo "<br>type de $a : ".gettype($a);
        settype($a,"integer");
        echo "<br>type de $a : ".gettype($a);

        echo "<br>type de $b : ".gettype($b);
        $b = (int)$b;
        echo "<br>type de $b : ".gettype($b);
        define("PI",3.14);
        echo "<br>PI = ".PI." et c'est tout";
    ?>
    <!-- corps -->
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci provident ducimus quo labore expedita perspiciatis nobis amet? Ea molestias porro dolorem non, quod soluta iste cum, nulla explicabo expedita maiores?
    </p>
    <!-- en tete -->
    <?php
        // pied page
        include "footer.html"
    ?>
</body>
</html>