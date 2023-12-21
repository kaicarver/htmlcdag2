<?php 
require_once("connexion.php");
$ps = $pdo->prepare("SELECT * FROM produit");
$ps->execute();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste produits</title>
</head>
<body>
    <!-- header/nav -->
    <?php include "header.php";?>

    <!-- Contenu de notre page  -->
    <section class="container" style="margin-top:60px;">
        <div class="card">
            <div class="card-header">
                <h1 class="text-center fst-italic">Liste des produits</h1>
            </div>
            <div class="card-body">
                <table class="table table-striped table-primary">
                <tr>                   
                    <th>ID :</th>
                    <th>Désignation :</th>
                    <th>Prix :</th>
                    <th>Catégorie :</th> 
                    <th>Photo :</th>                    
                    <th colspan=2></th>
                </tr>
                <!-- fetch() récupère un seul enregistrement ici 1 étudiant ici -->
                <?php while($produit = $ps->fetch()) {  ?>
                    <tr>
                        <td><?php echo $produit['id'];?></td>
                        <td><?php echo $produit['designation'];?></td>
                        <td><?php echo $produit['prix'];?></td>
                        <td><?php echo $produit['idCat']; ?></td>
                        <td>
                            <img class="rounded" src= "./IMAGE/<?php echo $produit['photo'];?>" width="110" height="100" alt="<?php echo $produit['photo'];?>"> 
                        </td>                       
                        <!-- Buttons modification et supression -->
                        <td><a href="updateProduit.php?id=<?php echo $produit['id']?>" class="btn btn-secondary"><i class="bi bi-pencil-square"></i></a></td>
                        <td><a href="deleteProduit.php?id=<?php echo $produit['id'] ?>" id="delete" class="btn btn-danger"><i class="bi bi-trash3"></i></a></td>
                      
                    </tr>
                <?php } ?>
                </table>
            </div>
        </div>  
        
    </section>

</body>
</html>