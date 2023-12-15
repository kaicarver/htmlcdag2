<?php 
$identifiant = $_GET['code'];
$connexion = new mysqli("localhost", "root", "", "interactionsqlphp");
$sql = "select * from client where id=$identifiant";
$res = $connexion->query($sql);
$client = $res->fetch_assoc();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier client</title>
</head>
<body>
    <h2>Modifier client <?php echo $identifiant ?></h2>
    <form method=post action=domodifierclient.php>
        <input type="hidden" name="id" value="<?php echo $identifiant ?>" />
        <label>Nom</label><input type="text" name="nom" value="<?php echo $client['nom']; ?>"><br>
        <label>Prénom</label><input type="text" name="prenom" value="<?php echo $client['prenom']; ?>"><br>
        <input type="submit" name=Soumission>
    </form>
<?php