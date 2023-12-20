<?php
if (isset($_POST['Ajouter']) || isset($_POST['Modifier'])) {
    require_once "connect.php";
    $sql = isset($_POST['Ajouter']) ?
        "insert into produits (designation, prix, photo) values (?, ?, ?)" :
        "update produits set designation=?, prix=?, photo=? where id = ?";
    $ps = $pdo->prepare($sql);
    $sql = isset($_POST['Ajouter']) ?
        $ps->execute([$_POST['designation'], $_POST['prix'], $_POST['photo']]) :
        $ps->execute([$_POST['designation'], $_POST['prix'], $_POST['photo'], $_POST['id']]);
    header("location: list.php");
}
if (isset($_GET['id'])) {
    $libaction = "Modifier";
    $id = $_GET['id'];
    require_once "connect.php";
    $ps = $pdo->prepare("select * from produits where id = ?");
    $ps->execute([$id]);
    $produit = $ps->fetch();
    $designation = $produit['designation'];
    $prix = $produit['prix'];
    $photo = $produit['photo'];
} else {
    $libaction = "Ajouter";
    $id = "";
    $designation = "";
    $prix = "";
    $photo = "";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $libaction ?> Produit</title>
</head>
<body>
    <?php require_once "header.php"; ?>
    <h1><?php echo $libaction ?> Produit</h1>
    <form action="edit.php" method="post">
        <input type="hidden" name="id" value="<?php echo $id ?>">
        <label for="designation">Désignation</label><input type="text" name="designation" id="designation" value="<?php echo $designation ?>">
        <label for="prix">Prix</label><input type="text" name="prix" id="prix" value="<?php echo $prix ?>">
        <label for="photo">Photo</label><input type="text" name="photo" id="photo" value="<?php echo $photo ?>">
        <input type="submit" value="<?php echo $libaction ?>" name="<?php echo $libaction ?>">
    </form>
</body>
</html>