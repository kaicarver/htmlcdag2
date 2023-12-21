<?php
require_once "securite.php";
require_once "connexion.php";
// prepare statement
$ps = $pdo->prepare("SELECT * FROM etudiants ORDER BY code;");
$ps->execute();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <!-- <link rel="stylesheet" href="./node_modules/bootstrap-icons/font/bootstrap-icons.css"> -->
    <title>Liste d'étudiants</title>
</head>
<body>
    <!-- En-tete - Barre de navigation -->
    <?php 
    require_once("entete.php");
    ?>
    <!-- Contenu de notre page : tableau html -->
    <div class="container" style="margin-top:60px">
        <div class="card">
            <div class="card-header"><h3 class="text-center">Liste des étudiants</h3></div>
            <div class="card-body">
                <table class="table table-striped">
                    <tr>
                        <td>Code</td>
                        <td>Nom</td>
                        <td>Email</td>
                        <td>Photo</td>
                        <td colspan=2>...</td>
                    </tr>
                    <?php while ($etudiant = $ps->fetch()) { ?>
                        <tr>
                            <td><?php echo $etudiant['code'] ?></td>
                            <td><?php echo $etudiant['nom'] ?></td>
                            <td><?php echo $etudiant['email'] ?></td>
                            <td><img src="images/<?php echo $etudiant['photo'] ?>" alt="<?php echo $etudiant['photo'] ?>" class="img-thumbnail img-fluid w-5" width="50" height="50" xstyle="width: 50px; height: 50px;"></td>
                            <td><a href="saisirEtudiant.php?code=<?php echo $etudiant['code'] ?>" class="btn btn-warning">Modifier <i class="bi bi-pencil"></i></a></td>
                            <td><a href="supprimerEtudiant.php?code=<?php echo $etudiant['code'] ?>" class="btn btn-danger">Supprimer <i class="bi bi-trash"></i></a></td>
                        </tr>
                    <?php } ?>
                </table>
            </div>
        </div>
    </div>
</body>
</html>