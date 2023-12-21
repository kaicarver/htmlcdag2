<?php
require_once "connect.php";
$ps = $pdo->prepare("select * FROM client order by id");
$ps->execute();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <title>Liste clients (users)</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    <div>
        <a href="listclient.php">Liste</a>
        <a href="newclient.php">Nouveau Client (user)</a>
    </div>
    <h1>Liste Clients (users)</h1>
    <div>
        <table class="table">
            <th>id</th>
            <th>nom</th>
            <th>prenom</th>
            <th>login</th>
            <th>email</th>
            <th>password</th>
            <th>role</th>
            <th></th>
            <th></th>
            <?php while ($client = $ps->fetch()) { ?>
            <tr>
                <td><?php echo $client["id"] ?></td>
                <td><?php echo $client["nom"] ?></td>
                <td><?php echo $client["prenom"] ?></td>
                <td><?php echo $client["login"] ?></td>
                <td><?php echo $client["email"] ?></td>
                <td><?php echo $client["password"] ?></td>
                <td><?php echo $client["role"] ?></td>
                <td><a href="newclient.php?id=<?php echo $client["id"] ?>">Modifier <i class="bi bi-pencil-square"></i></a></td>
                <td><a href="deleteclient.php?id=<?php echo $client["id"] ?>">Supprimer <i class="bi bi-trash"></i></a></td>
            </tr>
            <?php } ?>
        </table>
    </div>

</body>
</html>