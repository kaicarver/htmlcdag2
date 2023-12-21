<?php
  $id=$_GET['id'];
  require_once("connexion.php");
  
  $ps= $pdo->prepare("SELECT * FROM produit WHERE id=?");
  $ps2= $pdo->prepare("SELECT * FROM categorie");

  $params = array($id); 
  $params2 = array(); 

  $ps->execute($params);
  $ps2->execute($params2);
  $produit = $ps->fetch();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modification produit</title>
</head>
<body>
<body>
    <!-- header/nav -->
    <?php include "header.php"; ?>
    <section class="container" style="margin-top:80px">

        <h1 class="text-center">Formulaire de produit</h1>

        <form action="traitement_produit.php" method="post" enctype="multipart/form-data">
            <input type="hidden" name="id" value="<?php echo $produit['id']?>">

            <label for="des" class="form-label">Nom : </label>
            <input type="text" name="designation" class="form-control" id="des" value="<?php echo $produit['designation']?>">

            <label for="price" class="form-label">Prix</label>
            <input type="text"name="prix" class="form-control" id="price" value="<?php echo $produit['prix']?>">
            
            <label for="pic" class="form-label">Image</label>
            <input type="file" name="photo" id="pic" class="form-control">

            <label for="cat" class="form-label">Catégorie :</label>
            <select class="form-select" name="idCat">
            <?php while($categorie = $ps2->fetch()) {?>          
                <option value="<?php echo $categorie['idCat']?>"><?php echo $categorie['nomCat']?></option>
            <?php }  ?>
            </select>

            <button type="submit" class="btn btn-secondary mt-3">Enregistrer</button>
        </form>
    </section>
</body>
</html>