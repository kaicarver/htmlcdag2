-- Créer une base de données « TP_1 » puis importer les 2 tables départements.sql et ville.sql
-- Veuillez trouver les requêtes SQL permettant d’effectuer chacune des demandes suivantes :

-- 1.Obtenir la liste des 10 villes les plus peuplées en 2012
SELECT ville_nom, ville_population_2012 FROM villes_france_free order by ville_population_2012 DESC limit 10;
-- 2.Obtenir la liste des 50 villes ayant la plus faible superficie
SELECT ville_nom, ville_surface FROM `villes_france_free` order by ville_surface asc limit 50;
-- 3.Obtenir la liste des départements d’outre-mer, c’est-à-dire ceux dont le numéro de département commence par “97”
SELECT departement_nom, departement_code FROM departement where departement_code like "97%";
-- 4.Obtenir le nom des 10 villes les plus peuplées en 2012, ainsi que le nom du département associé
SELECT ville_nom, ville_population_2012, departement_code FROM villes_france_free, departement where villes_france_free.ville_departement = departement.departement_code order by ville_population_2012 DESC limit 10;
-- 5.Récupérer le nom, le code et le nombre de communes pour les 5 départements qui possèdent le plus de communes.
SELECT departement_code, departement_nom, count(ville_id) "nombre de villes" FROM villes_france_free, departement where villes_france_free.ville_departement = departement.departement_code group by departement_code order by count(ville_id) desc limit 5;
-- 6.Obtenir la liste des 10 plus grands départements, en termes de superficie
SELECT departement_code, departement_nom, sum(villes_france_free.ville_surface) "superficie" FROM villes_france_free, departement where villes_france_free.ville_departement = departement.departement_code group by departement_code order by superficie desc limit 10;
-- 7.Compter le nombre de villes dont le nom commence par “Saint”
SELECT count(*) from villes_france_free where villes_france_free.ville_nom like "SAINT%";
-- 8.Obtenir les 5 villes dont le nom se répété le maximum de fois.
SELECT ville_nom, count(villes_france_free.ville_id) nombre from villes_france_free group by ville_nom order by nombre desc limit 10;
-- 9.Obtenir en une seule requête SQL la liste des villes dont la superficie est supérieure à la superficie moyenne
SELECT ville_nom, ville_departement, ville_surface FROM `villes_france_free` where ville_surface > (select avg(ville_surface) from villes_france_free)order by ville_surface desc;
-- 10.Obtenir la liste des départements qui possèdent plus de 2 millions d’habitants en 2012.
SELECT departement_code, departement_nom, sum(ville_population_2012) population FROM villes_france_free, departement where villes_france_free.ville_departement = departement.departement_code group by departement_code having population > 2000000 order by population desc;
