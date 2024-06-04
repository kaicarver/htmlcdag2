---
title: Rapport du projet Jourdebord
author: Robert Carver
header-includes: |
    \usepackage{fancyhdr}
    \pagestyle{fancy}
    \fancyhead[CO,CE]{Ceci est le fancyhead}
    \fancyfoot[CO,CE]{Ceci est le fancyfoot}
    \fancyfoot[LE,RO]{\thepage}
abstract: Presentation du projet Jourdebord realise pour le titre professionnel Concepteur developpeur d'applications . . . 
...

Table des matières :

[à calculer]

***

# Introduction

Ce document décrit l’ensemble du travail que j’ai réalisé pendant la formation de Concepteur développeur d’applications pour produire l’application JourDeBord, une application pour l’écriture et la prise de notes.

La conception et le développement de l’application ont suivi le chemin traité dans notre cours, partant d’une idée et d’une expression de besoins prenant la forme d’un cahier des charges rudimentaire, passant par une réponse sous la forme de spécification fonctionnelle, maquettage, modélisation via deux méthodologies différentes, choix de technologies, développement logiciel, tests, et mise en production, le tout dans le cadre d’une gestion de projet.

# Présentation du projet / Expression des besoins

Jourdebord est une application de prises de notes inspirée du journal de bord tenu par un capitaine de navire. 

## Contexte du projet

Nos vies contiennent plein d’événements dont nous pouvons vouloir garder la trace. Garder une trace de ces événements permet de se souvenir et de prévoir.

Nous utilisons divers outils électroniques ou non pour gérer nos vies, en garder des traces, et prévoir. Appareil à photo, agenda, calepin, etc. Nous avons aussi des messageries et des réseaux sociaux où nous publions des informations parfois publiques et parfois restreintes à certains publics proches. Et il peut arriver de faire des notes personnelles, par exemple dans le contexte de son occupation professionnelle ou lors d’un voyage.

Jourdebord ambitionne d’être un outil de prise de notes textuelles qui réponde à et complète tous ces cas de figure de traces d’événements ou de notes de notre vie.

## Objectifs de l’outil

Facile et rapide à utiliser : rend possible de prendre une note de manière quasi instantanée sur tous types d’appareils allant de l’ordinateur de bureau au téléphone portable.

Sécurisé et confidentiel : garantit pour chaque utilisateur la confidentialité et la sécurité des données qu’il ou elle enregistre dans l’application.

Recherche facile : permet de facilement retrouver des informations, présentées de manière pratique et lisible.

## Étude de l’existant

Les outils d’écriture font foison : les premiers outils de traitement de texte furent développés il y a un demi-siècle. Et de nos jours nous écrivons tous des messages ou des notes de toutes sortes sur nos téléphones portables.

Parmi l’infinité d’outils potentiellement concurrents, nous en avons choisi trois pour faire une comparaison : l’outil de traitement de texte Google Docs, l’outil de prise de notes Apple Notes, et l’outil d’écriture 750words.com.

### Google Docs : 

Un outil qui permet d’écrire et de publier des documents de qualité professionnelle, comparable à Microsoft Word.
 
Avantages : gratuit, en réseau, mise en page

Inconvénients : pas orienté recherche de texte, un peu lourd à utiliser pour prendre des notes

### Apple Notes : 

Un outil conçu pour prendre des notes rapides sur un appareil mobile Apple.

Avantages : disponible sur son téléphone, prise de notes rapides, graphiques et mise en page

Inconvénients : peu disponible hors plateforme Apple, pas orienté recherche de texte

### 750words.com : 

Un outil peu connu qui encourage la pratique de l’écriture.

Avantages : simplicité, suivi des statistiques, gamification

Désavantages : pas de recherche facile, pas de manière d’organiser ses notes autre que chronologique

### Jourdebord : 

L’application que j’ai développée orientée prise de notes et suivi quotidien.

Avantages : rapide et facile de prendre des notes, recherche et catégorisation des notes

Désavantages : encore en phase de développement et de tests, fonctionnalités non encore implémentées, pas de business model

[afficher tableau comparatif des 4 applis]

# Conduite de projet

La conception et le développement du projet s’est faite en 3 parties : 

Pré-étude : 

Détermination du cahier des charges, identification des besoins, étude concurrentielle de l’existant.

Conception de l’application : 

Spécification des fonctionnalités et contraintes de qualité (spécifications dites “non fonctionnelles”), maquettage, modélisation UML et Merise.

Développement de l’application : 

Choix des technologies et outils de développement, développement, tests, mise en production.

Work Breakdown Structure

Permet de diviser les tâches à faire sur plusieurs niveaux.

Le work breakdown structure (WBS), aussi appelé organigramme des tâches du projet décompose un projet en une hiérarchie des travaux nécessaires pour le réaliser.

https://fr.wikipedia.org/wiki/Organigramme_des_t%C3%A2ches_du_projet

Planification Gantt

Un diagramme de Gantt permet d’avoir une vue d’ensemble de toutes les tâches de la conception et du développement de l’application, du temps prévu pour chacune des tâches, et des interdépendances entre ces tâches. Il donne à tous les participants (client, product owner, chef de projet, développeurs) une visibilité sur la progression du projet,

Il peut être complété par un diagramme de PERT pour clarifier les dépendances entre les différentes tâches et les points critiques du projet.

[diagramme de Gantt de Jourdebord]

Méthodologie Agile

L'utilisation d’une méthode dite Agile permet de réaliser le projet avec une visibilité pour tous les participants et une réactivité au cours du projet.

# Maquettage

Le maquettage permet de visualiser la conception et les fonctionnalités de l’application avant de la développer. C’est un outil de communication entre les différents participants du projet : le client, le product owner, le chef de projet, le designer et les développeurs.

Avec l’outil Figma, j’ai réalisé le zoning, les wireframes, la charte graphique (couleurs et polices), les maquettes de pages et un prototype montrant les transitions entre pages.

# Étude fonctionnelle

On veut spécifier les fonctionnalités et les contraintes de qualité que doit satisfaire l’application.

## Spécifications fonctionnelles

On fait la liste des fonctionnalités à réaliser, en les priorisant, car il y a toujours plus de fonctionnalités envisageables qu’il est possible de réaliser.

La méthode MoSCoW est un moyen de prioriser les tâches à accomplir.
Elle utilise des termes parlants pour communiquer avec le client : 

M must : doit être fait, important mais pas indispensable
S should : à faire mais app livrable même si non réalisé
C could : à faire si on a le temps
W won't : ne sera pas fait -- cette fois-ci

### Spécifications Must have :

Authentification, inscription, login, logout
Textes: création, consultation, mise à jour, suppression (CRUD)
Tags : CRUD

Recherche de texte :
recherche par date, par mot ou phrase
tous les textes, textes d’une certaine date
résultats ordonnés par date de création, date de dernière mise à jour

### Spécifications Should have :

Affichages de texte :
afficher le texte par heure, jour, semaine, mois, total
afficher texte complet, fragment de texte

Templates : CRUD

Partage de texte : rendre un texte public avec une URL

Statistiques de texte :
nombre de mots par jour, semaine, mois, total
mots les plus utilisés

### Spécifications Could have : 

Nuages de mots
Localisation : interface de l'application en autre chose que français
L'admin ne doit pas pouvoir lire les textes des autres !

### Spécifications Won’t have : 

Attribution automatique de catégories
Création automatisée de templates
Badges et gamification :
badge vous avez écrit 1000 mots, vous avez commencé à écrire tôt, vous avez écrit tous les jours depuis 1 semaine, ...
...

## Spécifications non fonctionnelles ou contraintes de qualité

Qualité de l’interface

Ergonomie

La mise en page du site pour son utilisation au jour le jour doit satisfaire deux critères ergonomiques, selon le type d’utilisation : 

Pour la prise de notes, l’interface du site doit quasiment disparaître pour laisser l’utilisateur saisir du texte rapidement et en toute sécurité

Pour la recherche dans les notes, l’interface doit faciliter la recherche rapide selon un vaste nombre de critères

Graphisme

Les couleurs et les polices de caractere sont sobres, élégants, et légèrement “rétro”, de style “manuscrit”, en accord avec le principe de l’écriture. Comme c’est un outil à utilisation très personnelle, il pourrait être souhaitable de pouvoir en configurer la présentation pour qu’elle soit conforme aux préférences esthétiques de l’auteur.

Performances

L’application doit être disponible à tout moment, avec un temps de réponse instantané, ne pas avoir de ralentissements, et doit pouvoir fonctionner hors ligne, sans connection Internet. Les éventuels conflits dans les données doivent être traités. L’intégrité des données textuelles doit être préservée, et il ne faut jamais risquer perdre des données.

Sécurité

Les données textuelles de chaque utilisateur doivent n’être visibles que par cet utilisateur, et personne d’autre. Idéalement, même l’administrateur de l’application ne devrait pas pouvoir lire les données des utilisateurs. 

Le site et ses données doivent être protégées contre toute attaque. Le site de l’application doit appliquer toutes les bonnes pratiques pour être protégé contre les hackers : sécurité des mots de passe, etc. Même en cas de pénétration, les données doivent être inaccessibles à tout agent malveillant.

# Analyse et conception

C’est dans la phase d’analyse et de conception qu’on fait les choix qui affecteront toute la réalisation du projet. 

On a étudié deux méthodes de conception partiellement redondantes mais aussi relativement complémentaires, Merise et UML. Donc je présente ici l’application de ces deux méthodes et leurs diagrammes associés.

## UML

UML, le Unified Modeling Language, est le nom d’un type de modélisation objet qui est l’aboutissement de plusieurs efforts de rationaliser la modélisation objet.

Son avantage principal par rapport à Merise est de ne pas séparer données et traitements, mais au contraire les unir dans la modélisation objet.

### UML : Identification des acteurs

On peut commencer par identifier les acteurs au sens UML.

Les acteurs sont des personnes (ou éventuellement entités non humaines) qui interagissent avec le système modélisé. 

Il y a trois types d’acteur : l’internaute, l’auteur et l’administrateur.

L’internaute est toute personne visitant le site sans s’être inscrit. C’est un auteur potentiel qui pourra utiliser le site pour s’informer sur l’appli et décider de s’inscrire.

L’auteur est la personne à laquelle l’appli est destinée. Une fois inscrit et authentifié, un auteur pourra écrire des notes et consulter ce qu’il a écrit.

L’administrateur gère le site et répond aux problèmes éventuels.

### UML : Diagramme des cas d’utilisation

### UML : Diagramme de séquence

### UML : Diagramme de classes

## Merise

La méthodologie Merise permet de modéliser les données utilisées par un système : leur nature et leurs relations entre elles.

### Règles de gestion

### Dictionnaire de données

### Modèle conceptuel de données

### Modèle logique de données

### Modèle physique de données ?

# Mise en œuvre

## Définition de l’architecture utilisée

## Outils et frameworks utilisées

## Interfaces de l’application 

# Veille technique et vulnérabilités

## Veille marketing

## Vulnérabilités de sécurité

# Veille technologique / Recherche anglophone

## Explication de la recherche

## Traduction de la recherche 

# Conclusion

La conclusion...











