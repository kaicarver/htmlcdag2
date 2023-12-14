-- Soit la base de données intitulée PROJECTS permettant de gérer les projets relatifs au développement de logiciels. Elle est décrite par la représentation textuelle simplifiée suivante :
-- ·  Developpeur (NumDev, NomDev, AdrDev, EmailDev, TelDev)
-- ·  Projet (NumProj, TitreProj, DateDeb, DateFin)
-- ·  Logiciel (CodLog, NomLog, PrixLog, #NumProj)
-- ·  Realisation (#NumProj, #NumDev)
-- Ecrire les requêtes SQL permettant de :
-- 1. afficher les noms et les prix des logiciels appartenant au projet ayant comme titre « gestion de stock », triés dans l’ordre décroissant des prix .
select NomLog, PrixLog, TitreProj from Logiciel, Projet where Logiciel.NumProj = Projet.NumProj and TitreProj = "gestion de stock" order by PrixLog DESC;
-- 2. afficher le total des prix des logiciels du projet numéro 5. Lors de l’affichage, le titre de la colonne sera « cout total du projet ».
select sum(PrixLog) "cout total du projet" from Logiciel where NumProj = 5;
-- 3. afficher le nombre de développeurs qui ont participé au projet intitulé « gestion de stock »
select count(*) from Developpeur, Projet, Realisation where Realisation.NumProj = Projet.NumProj and Realisation.NumDev = Developpeur.NumDev and TitreProj = "gestion de stock";
-- 4. afficher les projets qui ont 5 logiciels
select TitreProj, NomLog, count(NomLog) from Logiciel, Projet where Logiciel.NumProj = Projet.NumProj group by TitreProj HAVING count(NomLog) >= 5;
-- 5. Afficher les numéros de projets dans lesquelles tous les développeurs y participent dans sa réalisation.
select Projet.NumProj, Projet.TitreProj, count(Developpeur.NumDev) from Developpeur, Projet, Realisation where Realisation.NumProj = Projet.NumProj and Realisation.NumDev = Developpeur.NumDev group by Projet.NumProj having count(Developpeur.NumDev) = (select count(*) from Developpeur);
