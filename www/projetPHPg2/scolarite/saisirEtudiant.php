<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Ajouter étudiant</title>
</head>
<body>
    <!-- En-tete - Barre de navigation -->
    <?php 
    require_once("entete.php");
    ?>
    <!-- Contenu de notre page : tableau html -->
    <div class="container" style="margin-top:60px">
        <div class="card">
            <div class="card-header"><h3 class="text-center">Ajouter étudiant</h3></div>
            <div class="card-body">
                <form method="post" action="">
                    <div class="form-group">
                        <div><label for="nom" class="form-label">Nom</label><input type="text" class="form-control" name="nom" id="nom"></div>
                        <div><label for="email">Email</label><input type="email" class="form-control" name="email" id="email"></div>
                        <div><label for="photo">Photo</label><input type="file" class="form-control" name="photo" id="photo"></div>
                        <div><input type="submit" name="soumettre" value="Ajouter" class="btn btn-primary mt-2"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>