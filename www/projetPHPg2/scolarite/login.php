<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Se connecter</title>
</head>
<body>
    <?php 
    require_once("entete.php");
    ?>
    <div class="container" style="margin-top:60px">
        <div class="card">
            <div class="card-header"><h3 class="text-center">Se connecter</h3></div>
            <div class="card-body">
                <form method="post" action="authentifier.php">
                    <div><label for="login" class="form-label">Login</label><input type="text" class="form-control" name="login" id="login"></div>
                    <div><label for="password">Password</label><input type="password" class="form-control" name="password" id="password"></div>
                    <div><input type="submit" value="Se connecter" class="btn btn-primary mt-2"></div>
                </form>
                <form method="post" action="authok.php">
                    <div><label for="login" class="form-label">Login</label><input type="text" class="form-control" name="login" id="login"></div>
                    <div><label for="password">Password</label><input type="password" class="form-control" name="password" id="password"></div>
                    <div><input type="submit" value="Se connecter" class="btn btn-primary mt-2"></div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>