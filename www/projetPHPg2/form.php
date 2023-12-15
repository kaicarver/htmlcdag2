<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
</head>
<body>
    <form method="get" action="traitement.php">
        <label>Nom</label><input type="text" name="nom" value="Titi">
        <label>Sujet</label><textarea name="sujet">Bla bla</textarea>
        <label>Sexe</label>
        <input type="radio" name="sexe" value="f">Femme</input>
        <input type="radio" name="sexe" value="h">Homme</input>
        <label>Comp</label>
        <input type="checkbox" name="comp[]" value="info">Info</input>
        <input type="checkbox" name="comp[]" value="anglais">Anglais</input>
        <input type="checkbox" name="comp[]" value="francais">Francais</input>
        <label>Pays</label>
        <select name="pays[]" multiple>
            <option value="france">France</option>
            <option value="italie">Italie</option>
            <option value="espagne">Espagne</option>
        </select>
        <input type="submit" value="Submit GET">
    </form>
    <form method="post" action="traitement.php">
        <label>Nom</label>
        <input type="text" name="nom" value="Toto">
        <input type="submit" value="Submit POST">
    </form>
</body>
</html>