<?php
if (isset($_GET['code'])) {
    // recuperer
    $code = $_GET['code'];

    // connecter
    require_once "connexion.php";

    // preparer
    $ps = $pdo->prepare("SELECT * FROM etudiants WHERE code = ? ;");
    $params = array($code);

    // executer
    $ps->execute($params);

    // recuperer
    $etudiant = $ps->fetch();
    $nom = $etudiant['nom'];
    $email = $etudiant['email'];
    $nomphoto = $etudiant['photo'];
    $actionName = "Modifier";
    $action = "modifierEtudiant.php";
    $imgfile = "./images/".$nomphoto;
    $imghtml = "<img src=\"images/$nomphoto\" alt=\"$nomphoto\" class=\"img-thumbnail img-fluid w-5\" width=\"50\" height=\"50\" >";
} else {
    $code = "";
    $nom = "";
    $email = "";
    $nomphoto = "";
    $actionName = "Ajouter";
    $action = "saveEtudiant.php";
    $imgfile = "./images/".$nomphoto;
    $imghtml = "";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title><?php echo $actionName ?> étudiant</title>
</head>
<body>
    <!-- En-tete - Barre de navigation -->
    <?php 
    require_once("entete.php");
    ?>
    <!-- Contenu de notre page : tableau html -->
    <div class="container" style="margin-top:60px">
        <div class="card">
            <div class="card-header"><h3 class="text-center"><?php echo $actionName ?> étudiant</h3></div>
            <div class="card-body">
                <form enctype="multipart/form-data" method="post" action="<?php echo $action ?>">
                    <div class="form-group">
                        <input type="hidden" name="code" value="<?php echo $code ?>">
                        <div><label for="nom" class="form-label">Nom</label><input type="text" class="form-control" name="nom" id="nom" value="<?php echo $nom ?>"></div>
                        <div><label for="email">Email</label><input type="email" class="form-control" name="email" id="email" value="<?php echo $email ?>"></div>
                        <div><label for="photo">Photo</label><input type="file" class="form-control" name="photo" id="photo" value="<?php echo $nomphoto ?>"> <?php echo $imghtml ?></div>
                        <div><input type="submit" value="<?php echo $actionName ?>" class="btn btn-primary mt-2" name="<?php echo $actionName ?>" ></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>