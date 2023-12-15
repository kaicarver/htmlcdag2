<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion PHP DB</title>
</head>
<body>
    <form action="dbtraitement.php" method=post>
    <label>nom</label><input type="text" name="nom" value="Dupont">
    <label>prenom</label><input type="text" name="prenom" value="Jean">
    x
    <input type="text" name="count" value="1">
    <input type="submit">
  </form>
<?php

/* $servername = "localhost";
$username = "root";
$password = "";
$dbname = "interactionsqlphp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "select Projet.NumProj, Projet.TitreProj, count(Developpeur.NumDev) from Developpeur, Projet, Realisation where Realisation.NumProj = Projet.NumProj and Realisation.NumDev = Developpeur.NumDev group by Projet.NumProj having count(Developpeur.NumDev) = (select count(*) from Developpeur);";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["prenom"]. " " . $row["nom"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close(); */
?>
</body>
</html>