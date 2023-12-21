-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 21 déc. 2023 à 09:07
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `scolarite`
--

-- --------------------------------------------------------

--
-- Structure de la table `etudiants`
--

DROP TABLE IF EXISTS `etudiants`;
CREATE TABLE IF NOT EXISTS `etudiants` (
  `code` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `photo` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `etudiants`
--

INSERT INTO `etudiants` (`code`, `nom`, `email`, `photo`) VALUES
(1, 'Toto ce héros', 'toto@gmail.com', '753c0c7a17dd7dc359c11019370a422f--funny-school-stuff-funny-stuff.jpg'),
(2, 'Martino', 'martino@gmail.com', 'simon-stiebjahn-(dossard-4)-vainqueur-de-cette-edition-2019-1570370465.jpg'),
(3, 'Katy', 'katy@free.fr', 'alfombra3.jpg'),
(24, 'Zoe Zurc', 'zoe@zurc.com', 'insta.jpg'),
(27, '222222222222222222222222222222222222222222222', '2222222@34444444444444', 'Yin_yang.svg.png'),
(15, 'Woodrow Wilson', 'ww2@ss.com', 'ww.jpg'),
(10, 'As Df', 'asdfdsf@sdfsfd', 'html5logo.png'),
(12, 'Walter White', 'ww@ss', 'th.jpg'),
(14, 'Walt Whitman', 'ww@ss.com', 'xtrem.jpg'),
(22, 'Ze last', '', 'OIP.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `login` varchar(80) NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` varchar(100) NOT NULL,
  PRIMARY KEY (`login`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`login`, `password`, `role`) VALUES
('toto', 'e79fb748c3c8ab532a8fcf2da53ae54d', 'admin'),
('jean', 'secret', ''),
('secret', '7022cd14c42ff272619d6beacdc9ffde', 'admin'),
('secret2', '5ebe2294ecd0e0f08eab7690d2a6ee69', ''),
('kai', 'e79fb748c3c8ab532a8fcf2da53ae54d', 'admin');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
