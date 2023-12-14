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