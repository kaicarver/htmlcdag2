<?php
require_once "connect.php";
$ps = $pdo->prepare("select * FROM produits order by id");
$ps->execute();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste Produits</title>
</head>
<body>
    <?php require_once "header.php"; ?>
    <h1>Liste Produits</h1>
    <?php while ($produit = $ps->fetch()) { ?>
        <div><?php echo $produit["id"] ?> <?php echo $produit["designation"] ?> <?php echo $produit["prix"] ?> <?php echo $produit["photo"] ?> <a href="edit.php?id=<?php echo $produit["id"] ?>">Modifier</a> <a href="delete.php?id=<?php echo $produit["id"] ?>">Supprimer</a></div>
    <?php } ?>
</body>
</html>