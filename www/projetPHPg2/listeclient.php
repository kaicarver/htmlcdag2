<?php
$connexion = new mysqli("localhost", "root", "", "interactionsqlphp");
$clients = $connexion->query("select * from client");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des clients</title>
    <style>
        * { text-align: center }
        table { border-collapse: collapse; }
        th, td { border: 3px solid gray; width: 400px; height: 50px; }
    </style>
</head>
<body>
    <h2>Liste des clients</h2>
    <table>
        <tr><th>id</th><th>nom</th><th>prenom</th><th colspan=2>...</th></tr>
        <?php 
            foreach ($clients as $client) {
        ?>
        <tr>
            <td><?php echo $client['id'] ?></td>
            <td><?php echo $client['nom'] ?></td>
            <td><?php echo $client['prenom'] ?></td>
            <td><a href="modifierclient.php?code=<?php echo $client['id'] ?>">Modifier</a></td>
            <td><a href="supprimerclient.php?code=<?php echo $client['id'] ?>">Supprimer</a></td>
        </tr>
        <?php 
            }
        ?>
    </table>
    <h4><a href="db.php">Ajouter client</a></h4>
</body>
</html>