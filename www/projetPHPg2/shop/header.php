<div>
    <a href="listclient.php">Liste</a>
    <a href="newclient.php">Nouveau Client (user)</a>
    <a href="login.php">Login</a>
    <a href="logout.php">Logout</a>
<?php echo isset($_SESSION['PROFILE']) ? $_SESSION['PROFILE']['login'] : "pas loggé"; ?>
</div>