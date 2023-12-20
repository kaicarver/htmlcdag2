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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <title>Liste Produits</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>img:hover { transform: scale(5); }</style>
</head>
<body>
    <?php require_once "header.php"; ?>
    <h1>Liste Produits</h1>
    <div>
        <table class="table">
            <?php while ($produit = $ps->fetch()) { ?>
            <tr>
                <td><?php echo $produit["id"] ?></td>
                <td><?php echo htmlspecialchars($produit["designation"]) ?></td>
                <td><?php echo $produit["prix"] ?></td>
                <td>
                    <img src="img/<?php echo $produit["photo"] ?>" alt="<?php echo $produit["photo"] ?>" title="<?php echo $produit["photo"] ?>" style="height: 40px; hover{transform: scale(1.1);}" />
                </td>
                <td><a href="edit.php?id=<?php echo $produit["id"] ?>">Modifier <i class="bi bi-pencil-square"></i></a></td>
                <td><a href="delete.php?id=<?php echo $produit["id"] ?>">Supprimer <i class="bi bi-trash"></i></a></td>
            </tr>
            <?php } ?>
        </table>
    </div>

</body>
</html>