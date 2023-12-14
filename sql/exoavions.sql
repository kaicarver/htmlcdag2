
mysql> use airline
Database changed
-- mysql 2.Afficher tous les avions
mysql> select * from avion;
+-----+--------+----------+----------+
| NA  | nom    | capacite | localite |
+-----+--------+----------+----------+
| 100 | AIRBUS |      300 | RABAT    |
| 101 | B737   |      250 | PARIS    |
| 102 | B737   |      220 | RABAT    |
| 103 | B737   |      100 | LYON     |
+-----+--------+----------+----------+
4 rows in set (0.06 sec)
-- mysql 3.Afficher tous les avions par ordre croissant sur le nom
mysql> select * from avion order by nom;
+-----+--------+----------+----------+
| NA  | nom    | capacite | localite |
+-----+--------+----------+----------+
| 100 | AIRBUS |      300 | RABAT    |
| 101 | B737   |      250 | PARIS    |
| 102 | B737   |      220 | RABAT    |
| 103 | B737   |      100 | LYON     |
+-----+--------+----------+----------+
4 rows in set (0.10 sec)
-- mysql 4.Afficher les noms et les capacités des avions
mysql> select nom, capacite from avion order by nom;
+--------+----------+
| nom    | capacite |
+--------+----------+
| AIRBUS |      300 |
| B737   |      250 |
| B737   |      220 |
| B737   |      100 |
+--------+----------+
4 rows in set (0.00 sec)
-- mysql 5.Afficher les localités des avions sans redondance
mysql> select distinct localite from avion;
+----------+
| localite |
+----------+
| RABAT    |
| PARIS    |
| LYON     |
+----------+
3 rows in set (0.00 sec)
-- mysql 6.Afficher les avions dans la localité est RABAT ou Lyon
mysql> select * from avion where localite in ("RABAT", "LYON");
+-----+--------+----------+----------+
| NA  | nom    | capacite | localite |
+-----+--------+----------+----------+
| 100 | AIRBUS |      300 | RABAT    |
| 102 | B737   |      220 | RABAT    |
| 103 | B737   |      100 | LYON     |
+-----+--------+----------+----------+
3 rows in set (0.00 sec)
-- mysql 7.Modifier la capacité de l’avion numéro 101, la nouvelle capacité est 400
mysql> update avion set capacite=400 where NA=101;
Query OK, 1 row affected (0.33 sec)
Enregistrements correspondants: 1  Modifi├®s: 1  Warnings: 0
mysql> select * from avion order by nom;
+-----+--------+----------+----------+
| NA  | nom    | capacite | localite |
+-----+--------+----------+----------+
| 100 | AIRBUS |      300 | RABAT    |
| 101 | B737   |      400 | PARIS    |
| 102 | B737   |      220 | RABAT    |
| 103 | B737   |      100 | LYON     |
+-----+--------+----------+----------+
4 rows in set (0.00 sec)
-- mysql 8.Afficher la capacité maximale, minimale et moyenne des avions
mysql> select max(capacite), min(capacite), avg(capacite) from avion;
+---------------+---------------+---------------+
| max(capacite) | min(capacite) | avg(capacite) |
+---------------+---------------+---------------+
|           400 |           100 |      255.0000 |
+---------------+---------------+---------------+
1 row in set (0.00 sec)
-- mysql 9.Afficher les données des avions dont la capacité est la plus basse
mysql> select * from avion order by capacite limit 1;
+-----+------+----------+----------+
| NA  | nom  | capacite | localite |
+-----+------+----------+----------+
| 103 | B737 |      100 | LYON     |
+-----+------+----------+----------+
1 row in set (0.01 sec)
-- mysql 10.Afficher les données des avions dont la capacité est supérieure ou égale à la capacité moyenne
mysql> select * from avion where capacite >= (select avg(capacite) from avion);
+-----+--------+----------+----------+
| NA  | nom    | capacite | localite |
+-----+--------+----------+----------+
| 100 | AIRBUS |      300 | RABAT    |
| 101 | B737   |      400 | PARIS    |
+-----+--------+----------+----------+
2 rows in set (0.03 sec)
