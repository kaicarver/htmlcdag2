-- base avec deux tables :
--   departements ( DNO, DNOM, VILLE )
--   employes ( ENO, ENOM, PROF, DATEEMB, SAL, COMM, #DNO )
use gestionentreprise;
-- 1 employes avec commission
select * from employes where comm=1;
-- 2 salaire moyen
select avg(sal) from employes;
-- 3 salaire max par departement
select dnom, max(sal) from departements, employes where departements.DNO = employes.Dno group by dnom;
-- 4 salaire moyen par profession
select prof, avg(sal) from departements, employes where departements.DNO = employes.Dno group by prof;
-- 5 nombre employes par departement
select dnom, count(ENO) from departements, employes where departements.DNO = employes.Dno group by dnom;
-- 6 salaire moyen par profession le plus bas
select prof, avg(sal) from departements, employes where departements.DNO = employes.Dno group by prof order by avg(sal) asc LIMIT 1;
select avgsal, prof from (select prof, avg(sal) avgsal from departements, employes where departements.DNO = employes.Dno group by prof) as t;
-- meilleure solution si plusieurs professions ont le salaire moyen le plus bas :
select prof, min(avgsal) from (select prof, avg(sal) avgsal from departements, employes where departements.DNO = employes.Dno group by prof) as t;