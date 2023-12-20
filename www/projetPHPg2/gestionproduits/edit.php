<?php
if (isset($_POST['Ajouter']) || isset($_POST['Modifier'])) {
    require_once "connect.php";
    $nomphoto = $_FILES['photo']['name'];
    $tmpphoto = $_FILES['photo']['tmp_name'];
    if (isset($_POST['Ajouter'])) {
        $sql = "insert into produits (designation, prix, photo) values (?, ?, ?)";
    } else {
        if ($nomphoto) {
            $sql = "update produits set designation=?, prix=?, photo=? where id = ?";
        } else {
            $sql = "update produits set designation=?, prix=? where id = ?";
        }
    }
    $ps = $pdo->prepare($sql);
    if (isset($_POST['Ajouter'])) {
        $ps->execute([$_POST['designation'], $_POST['prix'], $nomphoto]);
    } else {
        if ($nomphoto) {
            $ps->execute([$_POST['designation'], $_POST['prix'], $nomphoto, $_POST['id']]);
        } else {
            $ps->execute([$_POST['designation'], $_POST['prix'], $_POST['id']]);
        }
    }
    if ($nomphoto) {
        move_uploaded_file($tmpphoto, "./img/".$nomphoto);
    }
    header("location: list.php");
    // echo "designation=",$_POST['designation'], "prix=",$_POST['prix'], "nomphoto=",$nomphoto, "id=",$_POST['id'];
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
    $designation = "Produit 42";
    $prix = "42.42";
    $photo = "";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $libaction ?> Produit</title>
    <style>img:hover { transform: scale(20); }</style>
</head>
<body>
    <?php require_once "header.php"; ?>
    <h1><?php echo $libaction ?> Produit</h1>
    <form enctype="multipart/form-data" action="edit.php" method="post">
        <input type="hidden" name="id" value="<?php echo $id ?>">
        <label for="designation">Désignation</label><input type="text" name="designation" id="designation" value="<?php echo $designation ?>">
        <label for="prix">Prix</label><input type="text" name="prix" id="prix" value="<?php echo $prix ?>">
        <label for="photo">Photo</label><input type="file" name="photo" id="photo">
        <img src="img/<?php echo $photo ?>" alt="<?php echo $photo ?>" title="<?php echo $photo ?>" style="height: 20px">
        <input type="submit" value="<?php echo $libaction ?>" name="<?php echo $libaction ?>">
    </form>
</body>
</html>