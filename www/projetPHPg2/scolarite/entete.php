<nav class="navbar bg-dark navbar-dark navbar-expand-md fixed-top">
    <ul class="navbar-nav">
        <?php if (isset($_SESSION['PROFILE'])) { ?>
        <li class="nav-item"><a href="etudiants.php" class="nav-link">Etudiants</a></li>
        <li class="nav-item"><a href="saisirEtudiant.php" class="nav-link">Ajouter étudiant</a></li>
        <li class="nav-item"><a href="logout.php" class="nav-link">Se déconnecter</a></li>
        <?php } else { ?>
            <li class="nav-item"><a href="login.php" class="nav-link">Se connecter</a></li>
            <li class="nav-item"><a href="#" class="nav-link">S'inscrire</a></li>
        <?php } ?>
    </ul>
</nav>