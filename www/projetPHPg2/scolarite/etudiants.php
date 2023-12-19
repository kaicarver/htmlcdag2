<?php
require_once "connexion.php";
// prepare statement
$ps = $pdo->prepare("SELECT * FROM etudiants;");
$ps->execute();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
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
                    </tr>
                    <?php while ($etudiant = $ps->fetch()) { ?>
                        <tr>
                            <td><?php echo $etudiant['code'] ?></td>
                            <td><?php echo $etudiant['nom'] ?></td>
                            <td><?php echo $etudiant['email'] ?></td>
                            <td><img src="<?php echo $etudiant['photo'] ?>" alt="<?php echo $etudiant['photo'] ?>"></td>
                        </tr>
                    <?php } ?>
                </table>
            </div>
        </div>
    </div>
</body>
</html>