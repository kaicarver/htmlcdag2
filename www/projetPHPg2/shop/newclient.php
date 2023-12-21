<?php
require_once "securite.php";
if (isset($_GET['id'])) {
    $libaction = "Modifier";
    $id = $_GET['id'];
    require_once "connect.php";
    $ps = $pdo->prepare("select * from client where id = ?");
    $ps->execute([$id]);
    $client = $ps->fetch();
    $nom = $client['nom'];
    $prenom = $client['prenom'];
    $login = $client['login'];
    $email = $client['email'];
    $password = $client['password'];
    $role = $client['role'];
} else {
    $libaction = "Ajouter";
    $id = "";
    $nom = "Titi";
    $prenom = "Toto";
    $login = "toto";
    $email = "toto@example.com";
    $password = "secret";
    $role = "normal";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $libaction ?> client</title>
    <style>img:hover { transform: scale(20); }</style>
</head>
<body>
<?php require_once "header.php"; ?>
    <h1><?php echo $libaction ?> client</h1>
    <form enctype="multipart/form-data" action="saveclient.php" method="post">
        <input type="hidden" name="id" value="<?php echo $id ?>">
        <label for="nom">Nom</label><input type="text" name="nom" id="nom" value="<?php echo $nom ?>">
        <label for="prenom">Prénom</label><input type="text" name="prenom" id="prenom" value="<?php echo $prenom ?>">
        <label for="login">Login</label><input type="text" name="login" id="login" value="<?php echo $login ?>">
        <label for="email">Email</label><input type="email" name="email" id="email" value="<?php echo $email ?>">
        <label for="password">Password</label><input type="password" name="password" id="password" value="<?php echo $password ?>">
        <label for="role">Role</label><input type="text" name="role" id="role" value="<?php echo $role ?>">
        <input type="submit" value="<?php echo $libaction ?>" name="<?php echo $libaction ?>">
    </form>
</body>
</html>