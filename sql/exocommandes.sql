-- Créer une base de données « TP_2 » puis importer les 3 tables client.sql, commande.sql et commande_ligne.sql
--  Exprimez en SQL les requêtes suivantes :

-- 1.Obtenir la liste de tous les produits qui sont présent sur plusieurs commandes.
SELECT nom, count(nom) FROM commande_ligne group by nom having count(nom) > 1 order by count(nom) desc;
-- 2.Obtenir la date et le montant total pour chaque commande, ainsi que le prénom et nom du client associé.
SELECT date_achat, cache_prix_total, prenom, nom FROM commande, client where commande.client_id = client.id order by nom, prenom;
-- 3.Obtenir le montant global de toutes les commandes, pour chaque mois.

-- 4. Obtenir le montant global de toutes les commandes, pour chaque année.
