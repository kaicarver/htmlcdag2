<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">  
</head>
<div>
    <a href="listclient.php">Liste</a>
    <a href="newclient.php">Nouveau Client (user)</a>
    <a href="login.php">Login</a>
    <a href="logout.php">Logout</a>
<?php echo isset($_SESSION['PROFILE']) ? $_SESSION['PROFILE']['login'] : "pas loggé"; ?>
</div>