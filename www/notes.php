<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice : Notes</title>
</head>
<body>
    <?php 
    $matieres = ['info', 'error', 'éco', 'fran', 'math', 'ana', 'phys'];
    $coefs = [4, 2, 2, 3, 3, 3, 3];
    $notes = [11, 3, 3, 15, 7, 12, 14];
    $totalnote = 0;
    $totalcoef = 0;
    // echo $_GET['notes'];
    echo "<h2>Notes :</h2>";
    for ($i = 0; $i < count($matieres); $i++) {
        echo "$matieres[$i] : note $notes[$i] coef $coefs[$i]<br>";
        $totalnote += $notes[$i] * $coefs[$i];
        $totalcoef += $coefs[$i];
    }
    echo "<h2>Résultat :</h2>";
    echo "<p>Total $totalnote / $totalcoef</p>";
    $moyenne = $totalnote / $totalcoef;
    echo "<p>Moyenne $moyenne</p>";
    if ($moyenne > 10) {
        echo "<p>Admis !</p>";
    } elseif ($moyenne == 10) {
            echo "<p>Juste !</p>";
    } else {
        echo "<p>Non admis.</p>";
    }
    ?>
</body>
</html>