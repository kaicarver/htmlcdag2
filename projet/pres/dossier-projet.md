---
title: Rapport du projet Jourdebord
author: Robert Carver
toc-title: "Table des matières"
abstract-title: "Résumé"
header-includes: |
    \usepackage{fancyhdr}
    \pagestyle{fancy}
    \fancyhead[CO,CE]{ }
    \fancyfoot[CO,CE]{Projet Jourdebord}
    \fancyfoot[LE,RO]{\thepage}
abstract: Présentation du projet Jourdebord, la réalisation d'une application de prise de notes, effectuée pour le titre professionnel de Concepteur développeur d'applications, RNCP 37873.
...

\thispagestyle{empty}

\newpage
\pagenumbering{roman}

\fancyfoot[CO,CE]{Table des matières}

\renewcommand{\contentsname}{}
\tableofcontents

\fancyfoot[CO,CE]{Projet Jourdebord}

\newpage
\pagenumbering{arabic}

# Introduction

Ce document décrit l’ensemble du travail que j’ai réalisé pendant la formation de Concepteur développeur d’applications pour produire l’application Jourdebord, une application pour l’écriture et la prise de notes.

La conception et le développement de l’application ont suivi le chemin traité dans notre cours, un parcours itératif commençant avec une idée et une expression de besoins sous forme de cahier des charges rudimentaire, passant par une réponse sous la forme de spécification fonctionnelle, puis de maquettage, ensuite de modélisation via deux méthodologies différentes, suivie d'un choix d'architecture, de technologies et d'outils, puis du développement logiciel, des tests, et de la mise en production, le tout dans le cadre d’une gestion de projet.

Tout au long de ce document, on présente deux choses en parallèle : la théorie générale de la conception et du développent d'applications enseignée pendant le cours, et son application spécifique pour la réalisation de l'application Jourdebord.

# Description de la formation

## Le titre

RNCP 37873

### Objectifs et contexte de la certification

Le concepteur développeur d'applications conçoit et développe des applications sécurisées, tels que des logiciels d'entreprise, des applications pour mobiles et tablettes, ainsi que des sites Web. Il respecte la réglementation en vigueur, identifie les besoins en éco-conception et applique les procédures qualité de l'entreprise. Il contribue à la réussite du projet en termes de satisfaction des besoins des utilisateurs, gestion de projet, qualité, coût et délai. La sécurité de l'application est pour lui une préoccupation constante.

### Activités visées

Le concepteur développeur d'applications est l'interlocuteur privilégié du client pour la conception et le développement du projet informatique. Il dialogue avec lui afin de connaître les besoins des utilisateurs. Il adapte sa communication à ses différents interlocuteurs et contextes professionnels, y compris en présence d'une personne en situation de handicap. La communication orale peut se faire en anglais, en particulier avec des prestataires de service.

En analysant le cahier des charges du projet informatique, il identifie les fonctionnalités ou les évolutions de l'application. Dans le respect des recommandations de sécurité émise par l'agence nationale de la sécurité des systèmes d'information (ANSSI), il conçoit des applications sécurisées en utilisant une architecture logicielle multicouche et rédige le dossier de conception.

Le concepteur développeur d'applications développe les interfaces utilisateur et les traitements métier de l'application avec des composants sécurisés. Il conçoit ou modifie le modèle des données de l'application, permettant la création ou la modification des bases de données. Il réalise les accès aux données et leurs mises à jour, en assurant leur sécurité et leur confidentialité.

Il rédige et exécute le plan de tests, prépare et documente le déploiement de l'application et contribue à la mise en production dans une démarche DevOps en collaboration avec l'équipe de production.

Le concepteur développeur d'applications met en place les mentions légales liées au règlement général sur la protection des données (RGPD). Il se réfère au référentiel général d'amélioration de l'accessibilité (RGAA) dans la réalisation des maquettes des interfaces utilisateur et leur enchaînement et répond aux besoins des personnes en situation de handicap.

Le concepteur développeur d'applications adopte une démarche structurée de résolution de problème adaptée en cas de dysfonctionnement de l'application, y compris en cas d'incident survenant en production. Il met en place une veille informatique afin de connaître les évolutions techniques et de répondre aux problématiques de sécurité des technologies qu'il utilise.

Il communique en anglais pour l'expression écrite, compréhension écrite et compréhension orale au niveau B1 (utilisateur indépendant) et pour l'expression orale au niveau A2 (utilisateur élémentaire) du cadre européen commun de référence pour les langues (CECRL).

Pour les projets de petite taille ou au sein de petites entreprises, il peut mener en autonomie l'intégralité de la réalisation de l'application, en lien avec le client. Dans le cas de moyens et de grands projets, il travaille soit au sein d'une équipe hiérarchisée sous la responsabilité d'un chef de projet, soit en équipe pluridisciplinaire pour les projets utilisant une méthode itérative de type agile

Le concepteur développeur d'applications est en relation avec le client, les utilisateurs, ainsi qu'avec différents collaborateurs ou experts : chef de projet, architecte logiciel, testeurs, responsable de la sécurité des systèmes d'information (RSSI), administrateur de base de données (DBA), hébergeur, experts techniques, experts métier, équipes chargées de l'exploitation de l'architecture du système d'information (Operations), développeurs et les autres concepteurs développeurs d'applications.

Le concepteur développeur d'applications peut travailler en tant que salarié d'une entreprise, y compris les entreprises de solutions logicielles, pour un client de l'entreprise de services numériques (ESN) qui l'emploie, ou en tant qu'indépendant directement pour un client.

L'emploi nécessite une station assise prolongée et un travail continu sur écran. Il assure sa mission dans des entreprises et des contextes professionnels divers. Il peut être amené à effectuer des déplacements professionnels et à travailler à distance.

### Compétences attestées

#### Développer une application sécurisée

Installer et configurer son environnement de travail en fonction du projet.

Développer des interfaces utilisateur

Développer des composants métier

Contribuer à la gestion d'un projet informatique

#### Concevoir et développer une application sécurisée organisée en couches

Analyser les besoins et maquetter une application

Définir l'architecture logicielle d'une application

Concevoir et mettre en place une base de données relationnelle

Développer des composants d'accès aux données SQL et NoSQL

#### Préparer le déploiement d'une application sécurisée

Préparer et exécuter les plans de tests d'une application

Préparer et documenter le déploiement d'une application

Contribuer à la mise en production dans une démarche DevOps

## Le cours

La formation de Concepteur développeur d’applications s'est déroulée sur une période de 20 semaines de cours en présentiel, du 9 octobre 2023 au 23 février 2024, à l'école _La Grande Classe_ de Montreuil.

Page Web de l'école décrivant la formation :

> Titre RNCP Concepteur Développeur d’Applications (Bac +3)

> https://lagrandeclasse.fr/concepteur-developpeur-dapplication/

# Idée d'application : cahier des charges

Idée, contexte, objectifs, existant, cible...

## L'idée

Jourdebord est une application de prises de notes inspirée entre autres du journal de bord tenu par un capitaine de navire ou de vaisseau spatial.

Plus précisément, le "elevator pitch" c'est :

> une appli Web de prise de notes recherchables (interrogeables) avec tracking (contrôle) d'habitudes (de pratiques)

Le projet commence avec une idée qui revient à une expression des besoins.

## Contexte du projet

Nos vies contiennent beaucoup d’événements dont nous pouvons vouloir garder la trace. Garder une trace de ces événements permet de se souvenir et de prévoir.

Nous utilisons divers outils électroniques ou non pour gérer nos vies, en garder des traces, et prévoir. Appareil à photo, agenda, calepin, etc. Nous avons aussi des messageries et des réseaux sociaux où nous publions des informations parfois publiques et parfois restreintes à certains publics proches. Et il peut arriver de faire des notes personnelles, par exemple dans le contexte de son occupation professionnelle ou lors d’un voyage.

Jourdebord ambitionne d’être un outil de prise de notes textuelles qui réponde à et complète tous ces cas de figure de traces d’événements ou de notes de notre vie.

## Objectifs de l’outil

Facile et rapide à utiliser : Jourdebord doit rendre possible de prendre une note de manière quasi instantanée sur tous types d’appareils allant de l’ordinateur de bureau au téléphone portable.

Sécurisé et confidentiel : Jourdebord garantit à son utilisateur la confidentialité et la sécurité des données qu’il ou elle enregistre dans l’application.

Recherche facile : Jourdebord permet de facilement et rapidement retrouver les informations qui lui sont confiées, présentées de manière pratique et lisible.

Intégrable avec d'autres applications : Jourdebord peut intégrer un événement enregistré par une autre application, comme par exemple un voyage guidé par un logiciel de navigation, une invitation par message, ou l'utilisation d'un appareil connecté.

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

### Tableau comparatif

| Appli    | Avantages                              | Inconvénients                             | Commentaires                       |
|-----------------|----------------------------------------|-------------------------------------------|------------------------------------|
| Google Docs     | gratuit, en réseau, mise en page       | pas orienté recherche de texte, un peu lourd à utiliser pour prendre des notes |                                    |
| Apple Notes     | disponible sur son téléphone, prise de notes rapides, graphiques et mise en page | peu disponible hors plateforme Apple, pas orienté recherche de texte |                                    |
| 750words    | simplicité, suivi des statistiques, gamification | pas de recherche facile, pas de manière d’organiser ses notes autre que chronologique |                                    |
| Jourdebord      | rapide et facile de prendre des notes, recherche et catégorisation des notes | encore en phase de développement et de tests, fonctionnalités non encore implémentées, pas de business model |                                    |

## Cible

L'application cible deux types de personnes : 

1. Les personnes qui veulent garder une trace de leurs activités.

2. Les personnes qui souhaitent écrire.

# Spécifications fonctionnelles

La réponse au cahier des charges (idée) prend la forme de spécifications.

Dans cette phase et la phase suivante de maquettage, on rédige, en échangeant avec le client, une espèce de manuel utilisateur de la future application que l'on va s'engager à développer.

On commence par aller dans le détail en spécifiant les fonctionnalités et les contraintes de qualité que doit satisfaire l’application.

## Fonctionnalités

On fait la liste des fonctionnalités à réaliser en les priorisant, car il y a toujours plus de fonctionnalités envisageables qu’il n'est possible de réaliser.

La méthode dite "MoSCoW" est un moyen de prioriser les tâches à accomplir.
Elle utilise des termes parlants pour communiquer avec le client : 

- M must : doit être fait, important mais pas indispensable
- S should : à faire mais app livrable même si non réalisé
- C could : à faire si on a le temps
- W won't : ne sera pas fait -- cette fois-ci

### Fonctionnalités Must have :

- Authentification, inscription, login, logout
- Textes: création, consultation, mise à jour, suppression (CRUD)
- Tags : CRUD

- Recherche de texte :
  - recherche par date, par mot ou phrase
  - tous les textes, textes d’une certaine date
  - résultats ordonnés par date de création, date de dernière mise à jour

### Fonctionnalités Should have :

- Affichages de texte :
  - afficher le texte par heure, jour, semaine, mois, total
  - afficher texte complet, fragment de texte

- Templates : CRUD

- Partage de texte : rendre un texte public avec une URL

- Statistiques de texte :
  - nombre de mots par jour, semaine, mois, total
  - mots les plus utilisés

- API, accès "headless" pour d'autres interfaces, par exemple :
  - création via bouton
  - affichage de type tableau de bord

### Fonctionnalités Could have :

- Nuages de mots
- Localisation : interface de l'application en autre chose que français
- L'admin ne doit pas pouvoir lire les textes des autres !

### Fonctionnalités Won’t have :

- Attribution automatique de catégories
- Création automatisée de templates
- Badges et gamification :
    - badge vous avez écrit 1000 mots, 
    - vous avez commencé à écrire tôt, 
    - vous avez écrit tous les jours depuis 1 semaine, ...
    - ...

## Spécifications non fonctionnelles ou contraintes de qualité

### Qualité de l’interface

#### Ergonomie

La mise en page du site pour son utilisation au jour le jour doit satisfaire deux critères ergonomiques, selon le type d’utilisation : 

Pour la prise de notes, l’interface du site doit quasiment disparaître pour laisser l’utilisateur saisir du texte rapidement et en toute sécurité

Pour la recherche dans les notes, l’interface doit faciliter la recherche rapide selon un vaste nombre de critères

#### Graphisme

Les couleurs et les polices de caractère sont sobres, élégants, et légèrement “rétro”, de style “manuscrit”, en accord avec le principe de l’écriture.

Comme c’est un outil à utilisation très personnelle, il pourrait être souhaitable de pouvoir en configurer la présentation pour qu’elle soit conforme aux préférences esthétiques de l’auteur.

### Performances

L’application doit être disponible à tout moment, avec un temps de réponse instantané, ne pas avoir de ralentissements, et doit pouvoir fonctionner hors ligne, sans connection Internet. 

Les éventuels conflits dans les données doivent être traités. 

L’intégrité des données textuelles doit être préservée, et il ne faut jamais risquer de perdre des données.

### Sécurité

Les données textuelles de chaque utilisateur doivent n’être visibles que par cet utilisateur, et personne d’autre.

Idéalement, même l’administrateur de l’application ne devrait pas pouvoir lire les données des utilisateurs.

Le site et ses données doivent être protégés contre toute attaque. 

Le site de l’application doit appliquer toutes les bonnes pratiques pour être protégé contre les hackers : sécurité des mots de passe, etc. 

Même en cas de pénétration, les données doivent être inaccessibles à tout agent malveillant.

# Maquettage

Le maquettage permet de visualiser la conception et les fonctionnalités de l’application avant de la développer. C’est un outil de communication entre les différents participants du projet : le client, le product owner, le chef de projet, le designer et les développeurs.

C'est une manière de visualiser, à différents niveaux de détail, l'ensemble de l'application ou du site web. Cette visualisation préliminaire de la future application permet d'y réfléchir et de faire des choix de conception de manière itérative avec les différentes parties prenantes, avant de débuter la phase de développement.

Avec l’outil Figma, j’ai réalisé le zoning, les wireframes, la charte graphique (couleurs et polices), les maquettes de pages et un prototype montrant les transitions entre pages.

## Zoning

Le zoning consiste à définir et positionner les différentes zones fonctionnelles communes à la plupart des pages web de l'appli.
On définit et positionne les différentes zones fonctionnelles de la page web.
On identifie les grandes zones de l'interface, comme l'en-tête, le menu, le contenu principal, et le pied de page.
On positionne ces zones pour faciliter l'expérience utilisateur et pour que l'interface et la navigation soient lisibles et régulières.

Le zoning de Jourdebord est relativement simple et homogène entre les différentes pages de l'application : il spécifie une en-tête en haut de la page, une zone de contenu, et un pied de page. 

L'en-tête contient des informations et des liens utiles à tout moment d'utilisation de l'application. 

La zone de contenu varie selon la page : soit un contenu de texte, éditable ou non, soit une liste de textes ou d'items en rapport avec le texte comme des catégories ou des templates, soit une page d'édition d'une entité particulière, soit une page spécifique avec une série de libellés, de champs, et de boutons pour des démarches comme l'inscription et le login. 

Le pied de page contient des liens vers des pages d'information sur l'application : une page "À Propos", des informations sur la société qui gère le site de l'application, et les conditions générales d'utilisation (CGU) du site.

Ci-dessous un schéma du zoning de Jourdebord :

![Zoning de Jourdebord](./img/zoning.jpg)

\newpage

## Wireframe

Le wireframe ajoute des détails au zoning en précisant la disposition des éléments sans préciser l'aspect graphique.
Le wireframe établit un squelette du site. C'est une représentation minimale du site pour que les participants au développement
de l'application puissent avoir une représentation commune du futur produit.

Pour Jourdebord, les wireframes decrivent la page de texte, les listes, le login, et l'inscription.

### Wireframe Page d'Accueil

La page d'accueil du site contient une introduction brève sur l'application et des liens vers des actions possibles.

L'introduction et les liens diffèrent selon le type de l'utilisateur.

Un utlisateur non inscrit voit une présentation brève sur l'intérêt de l'application et des liens vers des pages permettant d'en savoir plus, ainsi qu'un lien lui proposant de s'inscrire sur le site.

Un utilisateur inscrit, ou Author, voit une présentation générale en rapport avec son utilisation du site, des liens vers de l'aide en ligne documentant les fonctionnalités de l'application, et des liens vers les fonctions principales d'utilisation du site, comme l'écriture de texte, la consultation de texte déjà écrit, les categories, les templates, etc.

L'administrateur voit une page d'accueil similaire à celle de tout utilisateur inscrit, car il est lui-même un Author, mais avec des informations et des liens supplémentaires en rapport avec ses responsabilités en tant qu'administrateur, comme la liste des utilisateurs, la liste complète de catégories et de templates, et des statistiques d'utilisation de l'application.

La zone en-tête diffère également selon le type d'utilisateur. La zone pied de page est identique pour tous types d'utilisateur.

![Wireframe page Accueil de Jourdebord](./img/wireframe_accueil.jpg)

### Wireframe Page Liste des Textes

La page liste des textes 

![Wireframe page Liste de textes de Jourdebord](./img/wireframe_listetextes.jpg)

### Wireframe Page Écriture

![Wireframe page Écriture de Jourdebord](./img/wireframe_ecriture.jpg)

TODO: comment on each of the wireframes

## Charte graphique

Une charte graphique de site web regroupe les règles visuelles du site internet. Elle inclut le logo, les couleurs, les typographies, et des éléments tels que les boutons, icônes ou images. Elle assure la cohérence de l'identité visuelle de l'application dans toutes les pages du site.

Pour Jourdebord, la charte graphique et les couleurs sont choisies avec un effet désiré de suggérer un outil d'écriture (style ancien ou moderne ou les deux ?). Les couleurs doivent suggérer le papier, et les polices, un livre imprimé. Néanmoins, on évite un look trop "rétro", puisqu'il s'agit d'une application à ambitions modernes, pas un manuscrit.

TODO: describe and needs a picture

## Maquettes de pages

L'ensemble des maquettes de pages de l'application constitue une représentation visuelle de ce à quoi ressemblera l'application une fois terminée. Il sert de plan directeur et guide le processus de développement en aidant à visualiser le produit final avant même de commencer à le construire. Il facilite la communication des idées entre designers, développeurs et clients. Il assure également la cohérence visuelle et ergonomique des différentes parties de l'application. Et les maquettes de pages sont suffisamment précises et détailler pour permettre au développeur d'implémenter les pages en HTML et CSS.

Pour Jourdebord, toutes les pages principales sont maquettées pour une vue d'ensemble de l'application.

### Maquette Page d'Accueil

![Maquette page Accueil de Jourdebord](./img/maquette_accueil.png)

### Maquette Page Liste des Textes

![Maquette page Liste de textes de Jourdebord](./img/maquette_listetextes.png)

### Maquette Page Écriture

![Maquette page Écriture de Jourdebord](./img/maquette_ecriture.png)

TODO: needs three screenshots and comments

## Prototype avec transitions entre pages

Les maquettes de pages peuvent être regroupées dans un prototype interactif qui donne une impression réaliste de ce que sera l'expérience utilisateur (UX) de l'application. Le prototype sert à valider les propositions d'interface utilisateur (UI) et d'expérience utilisateur (UX) et à les affiner grâce aux retours des parties prenantes.

Pour Jourdebord, le prototype démontre l'enchaînement des pages de l'application, en commençant par la page d'accueil, pour aller à la page principale d'écriture de texte, avec la page de recherche. Il y a aussi une simulation de l'expérience de login et de l'inscription d'un nouvel utilisateur du site.

TODO: make this more matching what I want to say

# Analyse et conception

C’est dans la phase d’analyse et de conception qu’on fait les choix qui affecteront toute la réalisation du projet. 

On a étudié deux méthodes de conception partiellement redondantes mais aussi relativement complémentaires, Merise et UML. Donc je présente ici l’application de ces deux méthodes et leurs diagrammes associés.

## Merise

La méthodologie Merise est une méthode d'analyse et de conception de systèmes d'information. Elle repose sur une approche structurée et modulaire, permettant de modéliser les données, les traitements et l’organisation d’un système. Merise utilise trois niveaux de représentation : le niveau conceptuel, le niveau logique et le niveau physique. Le niveau conceptuel se concentre sur l’analyse des besoins et la modélisation des données, tandis que le niveau logique traduit ces concepts en modèles plus techniques, et le niveau physique est orienté vers la mise en œuvre concrète du système sur un support informatique. Cette méthode est particulièrement efficace pour gérer la complexité des projets, car elle sépare clairement les différentes étapes de la conception.

Merise permet de modéliser les données utilisées par un système : leur nature et leurs relations entre elles. 

### Règles de gestion

Dans la méthodologie Merise, les règles de gestion sont des contraintes et des conditions qui régissent le fonctionnement du système d’information, en définissant comment les données doivent être manipulées et traitées. Elles traduisent les exigences métiers et sont essentielles pour garantir que le système respecte les politiques et les processus de l'organisation. Ces règles peuvent porter sur des conditions de validité des données, des calculs, des autorisations d'accès, ou encore des enchaînements de traitements. Dans Merise, les règles de gestion sont spécifiées au niveau conceptuel, et sont ensuite prises en compte lors de la modélisation logique et physique pour s'assurer que le système développé réponde fidèlement aux besoins exprimés.

### Dictionnaire de données

Dans la méthodologie Merise, le dictionnaire de données est un outil de documentation qui centralise et décrit l'ensemble des données utilisées dans le système d'information. Il détaille les caractéristiques de chaque donnée (comme le type, la taille, le format, les contraintes et les règles de validation) ainsi que leur signification métier. Le dictionnaire de données facilite la communication entre les différents intervenants du projet en fournissant une référence commune et contribue à assurer la cohérence des données tout au long du cycle de développement. Il est également utile pour identifier les dépendances entre les données et les traitements dans le système, ce qui est essentiel pour la maintenance et l'évolution du système.

### Modèle conceptuel de données

Le Modèle Conceptuel de Données (MCD) est une étape clé de la méthodologie Merise, qui permet de représenter de manière abstraite les données d’un système d’information ainsi que leurs relations, indépendamment des contraintes techniques de mise en œuvre. Le MCD se concentre sur les objets métier, appelés entités, et leurs relations, en définissant également les attributs des entités (propriétés des données) et les cardinalités (règles de dépendance et d’association entre entités).

L’objectif du MCD est de traduire les besoins métier en un modèle de données logique et compréhensible pour tous les intervenants, tout en assurant la cohérence des informations manipulées par le système. Les entités du MCD deviennent ensuite les tables de la base de données dans le modèle physique, tandis que les relations aident à établir les liens entre ces tables. En d'autres termes, le MCD est un outil d'abstraction permettant de concevoir une base de données stable et bien structurée avant de passer aux phases de conception technique.

### Modèle logique de données

Le Modèle Logique de Données (MLD) est une étape de la méthodologie Merise qui traduit le Modèle Conceptuel de Données (MCD) en une représentation plus technique, proche de la structure de la base de données. Le MLD conserve la structure des entités et des relations définies dans le MCD, mais les adapte aux contraintes d'un Système de Gestion de Bases de Données (SGBD) relationnel. Concrètement, les entités du MCD deviennent des tables, les attributs des colonnes de ces tables, et les relations se transforment en clés étrangères permettant de relier les tables entre elles.

Le MLD tient compte des spécificités techniques comme le type de données (entiers, chaînes de caractères, etc.), les index, les clés primaires et étrangères, et les contraintes d’intégrité (unicité, non-nullité, etc.). Il est donc essentiel pour préparer la création physique de la base de données en s’assurant que le modèle répond aux exigences de performance, de fiabilité et de cohérence. En résumé, le MLD est un modèle de transition entre le conceptuel (MCD) et le physique (implantation réelle dans un SGBD).

### Modèle physique de données

Le Modèle Physique de Données (MPD) est l'étape finale de la conception d'une base de données dans la méthodologie Merise. Il représente la mise en œuvre concrète de la structure de données sur un Système de Gestion de Bases de Données (SGBD) spécifique. À partir du Modèle Logique de Données (MLD), le MPD tient compte des contraintes et particularités techniques du SGBD choisi, comme le langage SQL, les types de données disponibles, l'organisation du stockage et les options de performance.

Dans le MPD, les tables, colonnes, clés primaires et étrangères du MLD sont traduites en instructions de création de tables et d'index dans le langage du SGBD. On y définit aussi des éléments techniques comme les index (pour optimiser les recherches), les contraintes (pour assurer l’intégrité des données), et la gestion des espaces de stockage. Le MPD est donc la dernière étape avant l'implémentation et sert de plan de construction pour la base de données elle-même, en transformant la conception théorique en une structure prête à l’emploi dans l'environnement informatique réel.

## Modèle Merise de l'application Jourdebord

### 1. Modèle Conceptuel de Données (MCD)

Le MCD représente les entités principales du domaine et leurs associations :

- Un **Author** crée plusieurs **Textons**.
- Un **Texton** appartient à un seul **Author**.
- Un **Texton** peut avoir plusieurs **Tags**.
- Un **Tag** peut être associé à plusieurs **Textons**.
- Un **Tag** est lié à un **Template** (1 seul).
- Un **Author** peut choisir plusieurs **Tags**.

#### Entités

- **Author** (`id`, `login`, `type`)
- **Texton** (`id`, `contenu`, `dateCreation`, `dateModification`)
- **Tag** (`id`, `nomCat`)
- **Template** (`idtemplate`, `nomTemplate`, `contenu`)

#### Associations

- `avoir` (Author - Texton)
- `appartenir` (Texton - Tag)
- `avoir` (Tag - Template)
- `choisir` (Author - Tag)

---

### 2. Modèle Logique de Données (MLD)

| Table            | Attributs                                              | Clés                                               |
|------------------|--------------------------------------------------------|----------------------------------------------------|
| **AUTHOR**       | `id`, `login`, `type`                                  | PK: `id`                                           |
| **TEXTON**       | `id`, `contenu`, `dateCreation`, `dateModification`    | PK: `id`                                           |
| **TAG**          | `id`, `nomCat`                                         | PK: `id`                                           |
| **TEMPLATE**     | `idtemplate`, `nomTemplate`, `contenu`                 | PK: `idtemplate`                                   |
| **AUTHOR_TEXTON**| `id_author`, `id_texton`                               | PK: (`id_author`, `id_texton`), FK vers AUTHOR et TEXTON |
| **TEXTON_TAG**   | `id_texton`, `id_tag`                                  | PK: (`id_texton`, `id_tag`)                        |
| **TAG_TEMPLATE** | `id_tag`, `idtemplate`                                 | PK: (`id_tag`, `idtemplate`)                       |
| **AUTHOR_TAG**   | `id_author`, `id_tag`                                  | PK: (`id_author`, `id_tag`)                        |

---

Ci-dessous un diagramme représentant le MCD de Jourdebord.

![Modèle conceptuel de données](./img/mcd.png)

On voit les 4 entités du modèle : Texton, qui contient le texte, Tag, qui contient les catégories, Template, pour les templates, et Author qui contient les différents utilisateurs du système, soit les auteurs et l'administrateur.

### 3. Modèle Physique de Données (MPD)

```sql
CREATE TABLE Author (
  id INT PRIMARY KEY,
  login VARCHAR(50) NOT NULL,
  type VARCHAR(20)
);

CREATE TABLE Texton (
  id INT PRIMARY KEY,
  contenu TEXT,
  dateCreation DATE,
  dateModification DATE
);

CREATE TABLE Tag (
  id INT PRIMARY KEY,
  nomCat VARCHAR(50)
);

CREATE TABLE Template (
  idtemplate INT PRIMARY KEY,
  nomTemplate VARCHAR(100),
  contenu TEXT
);

CREATE TABLE Author_Texton (
  id_author INT,
  id_texton INT,
  PRIMARY KEY(id_author, id_texton),
  FOREIGN KEY(id_author) REFERENCES Author(id),
  FOREIGN KEY(id_texton) REFERENCES Texton(id)
);

CREATE TABLE Texton_Tag (
  id_texton INT,
  id_tag INT,
  PRIMARY KEY(id_texton, id_tag),
  FOREIGN KEY(id_texton) REFERENCES Texton(id),
  FOREIGN KEY(id_tag) REFERENCES Tag(id)
);

CREATE TABLE Tag_Template (
  id_tag INT,
  idtemplate INT,
  PRIMARY KEY(id_tag, idtemplate),
  FOREIGN KEY(id_tag) REFERENCES Tag(id),
  FOREIGN KEY(idtemplate) REFERENCES Template(idtemplate)
);

CREATE TABLE Author_Tag (
  id_author INT,
  id_tag INT,
  PRIMARY KEY(id_author, id_tag),
  FOREIGN KEY(id_author) REFERENCES Author(id),
  FOREIGN KEY(id_tag) REFERENCES Tag(id)
);
```

---

### 4. Dictionnaire de Données

| Attribut           | Description                                  | Type     | Taille | Obligatoire | Contraintes                         |
|--------------------|----------------------------------------------|----------|--------|-------------|-------------------------------------|
| `id`               | Identifiant unique                           | INT      | —      | Oui         | Clé primaire                        |
| `login`            | Identifiant de connexion de l’auteur         | VARCHAR  | 50     | Oui         | Unique                              |
| `type`             | Rôle ou profil de l’auteur                   | VARCHAR  | 20     | Non         | —                                   |
| `contenu`          | Contenu textuel du texte ou template         | TEXT     | —      | Non         | —                                   |
| `dateCreation`     | Date de création du texte                    | DATE     | —      | Oui         | Format ISO                          |
| `dateModification` | Dernière modification du texte               | DATE     | —      | Non         | Format ISO                          |
| `nomCat`           | Nom d’une catégorie                          | VARCHAR  | 50     | Oui         | —                                   |
| `nomTemplate`      | Nom du template                              | VARCHAR  | 100    | Oui         | —                                   |

---

### 5. Règles de Gestion

| ID    | Règle de gestion                                                                 | Type         |
|-------|----------------------------------------------------------------------------------|--------------|
| RG01  | Un auteur peut créer plusieurs textes, mais chaque texte appartient à un seul auteur. | Structure    |
| RG02  | Un texte peut avoir plusieurs tags, et un tag peut être utilisé dans plusieurs textes. | Structure    |
| RG03  | Chaque tag est lié à un seul template.                                           | Structure    |
| RG04  | Un auteur peut choisir plusieurs catégories (tags) pour son espace de travail.  | Traitement   |
| RG05  | Lors de la création d’un texte, la date de création est obligatoire.            | Intégrité    |
| RG06  | Le contenu d’un texte peut être vide au début, mais doit être modifiable.       | Traitement   |

---

### 6. Modèle Conceptuel des Traitements (MCT)

#### Scénario principal : création d’un texte

```plaintext
[Démarrer]
   ↓
[Création du texte (contenu vide, dateCreation)]
   ↓
[Ajout de tags à ce texte]
   ↓
[Lien avec un template (via les tags)]
   ↓
[Modification possible]
   ↓
[Fin]
```

#### Autres traitements :

- Créer un auteur
- Modifier un texte
- Supprimer un tag
- Associer un tag à un template
- Lister tous les textes liés à un tag

## UML

UML, le Unified Modeling Language, est le nom d’un type de modélisation objet qui est l’aboutissement de plusieurs efforts de rationaliser la modélisation objet.

Son avantage principal par rapport à Merise est de ne pas séparer données et traitements, mais au contraire les unir dans la modélisation objet.

### UML : Identification des acteurs

On peut commencer par identifier les acteurs au sens UML.

Les acteurs sont des personnes (ou éventuellement entités non humaines, comme des systèmes externes) qui interagissent avec le système modélisé. 

Dans Jourdebord, il y a trois types d’acteur : l’internaute, l’auteur et l’administrateur.

L’internaute est toute personne visitant le site sans s’être inscrit. C’est un auteur potentiel qui pourra utiliser le site pour s’informer sur l’appli et décider de s’inscrire.

L’auteur est la personne à laquelle l’appli est destinée. Une fois inscrit et authentifié, un auteur pourra écrire des notes et consulter ce qu’il a écrit.

L’administrateur gère le site et répond aux problèmes éventuels.

### UML : Diagramme des cas d’utilisation

Le diagramme de cas d'utilisation représente les interactions entre les acteurs et le système, ce qui en détaille les fonctionnalités.

Les cas d'utilisation servent à décrire ce que le système doit faire sans entrer dans le détail de comment le système le fait. En phase de conception du projet, il identifie les besoins fonctionnels et permet la communication entre les différentes personnes qui participent à la conception : client, concepteur, designer.

Avant de faire le diagramme, on peut décrire les cas d'utilisation de manière textuelle.

Nous listons ici 5 cas d'utilisation pour Jourdebord, définissant les quelques fonctionnalités principales et essentielles de l'application.

TODO : rendre les descriptions plus générales, sans mentionner détail des noms d'objets. Et c'est quoi un Measure au fait ?

#### Authentification du User.

Le User saisit login et mot de passe. Si ces informations sont correctes, le User a accès aux fonctionnalités du système. Sinon, le système lui demande de saisir des informations correctes. Le User peut demander une aide pour se connecter, qui lui est envoyée à son adresse email.


#### Le User crée et rédige un TextFragment dans une ou plusieurs Category spécifique(s).

Pendant la rédaction du texte, les Template en rapport avec la ou les Category sont affichés disponibles, et les Measure en rapport avec la ou les Category sont affichés.


#### Le User fait une recherche dans les TextFragment par date ou par pattern.

Les TextFragment sont affichés de plusieurs manières : compact, plein texte, pour mise à jour, ou pour affichage (impression ou visualisation en ligne partagée ou non).


#### Le User fait une mise à jour d'un TextFragment.

La mise à jour peut se faire de la même manière que le User fait la rédaction du texte lors de la création. Les différentes versions du TextFragment sont préservées avec leur date de dernière modification.


#### Le User fait une suppression d'un TextFragment.

La suppression se fait après confirmation. Une fois supprimé, le TextFragment n'apparaît plus dans les recherches par date et par pattern. On pourra, pendant un certain temps, récupérer les TextFragment supprimés en les cherchant dans une "corbeille".

Ci-dessous le diagramme de cas d'utilisation. TODO: mettre le bon diagramme !

![Modèle conceptuel de données](./img/mcd.png)

### UML : Diagramme de séquence

Le diagramme de séquence ajoute une dimension temporelle et dynamique au cas d'utilisation.

En complement au "quoi" des cas d'utilisation, le diagramme de sequence montre “comment” les éléments du système collaborent pour réaliser un cas d’utilisation, en détaillant l’ordre des messages ou des appels.

Comme dans le diagramme de cas d’utilisation, les acteurs sont souvent a l'origine des interactions.

L’axe vertical du diagramme représente la progression chronologique, du haut vers le bas.

Les elements du systeme, acteurs ou objets, sont représentés par des rectangles verticaux, avec une ligne de vie montrant leur existence dans le temps.

Des flèches horizontales entre les lignes verticales représentent les échanges entre les acteurs et les eleemnts du systeme. Ces echanges peuvent etre sous la forme d'appels de méthodes ou de réponses. Ils peuvent être synchrones (attente de réponse) ou asynchrones.

Des barres fines sur les lignes de vie, montrent quand un objet est actif ou traite une demande.

Ce diagramme sert a analyser les cas d'utilisation, valider la logique des interactions et faciliter la conception technique.

Ci-dessous un diagramme de séquence pour Jourdebord.

![Diagramme de séquence TODO: mettre à jour](./img/dseq.png){.nonfloat}

\newpage

### UML : Diagramme de classes

Qu'est-ce qu'un diagramme de classes ?

\newpage

# Mise en œuvre

Pour la mise en oeuvre, j'ai opté pour une architecture classique Web MVC avec une base de données relationnelle.

## Définition de l’architecture utilisée

Le modèle MVC sépare la logique métier (Modèle), l'interface utilisateur (Vue) et la gestion des requêtes (Contrôleur), facilitant la collaboration, les tests et les évolutions du code. 

La base de données relationnelle, quant à elle, offre une structure robuste pour stocker et gérer des données complexes avec des relations bien définies, garantissant l'intégrité et la cohérence des données.

Cette combinaison, couplée à un framework comme Symfony, accélère le développement grâce à des outils comme l'ORM Doctrine, tout en assurant sécurité, modularité et performance pour des applications de toutes tailles. Ceci permet de développer une application web structurée, maintenable et scalable.

J'aurais pu opter pour une architecture plus moderne basée sur React et une base NoSQL comme MongoDB. Ceci aurait facilité la mise en oeuvre d'une interface utilisateur dynamique et réactive grâce à React en front end. Et cela permettrait un schéma de données plus flexible grâce à une base de données aconçue pour être adaptable.

Mais j'ai choisi une architecture plus classique parce que j'avais plus d'expérience de réalisations avec elle et parce que le projet avait pour objet d'être relativement simple.

## Détail des technologies

PHP, Symfony, MySQL

## Autres outils

VS Code, Emacs, git

# Conduite de projet

## Développement en trois phases

La conception et le développement du projet se font en 3 parties :

### 1. Pré-étude :

Détermination du cahier des charges, identification des besoins, étude concurrentielle de l’existant.

### 2. Conception de l’application :

Spécification des fonctionnalités et contraintes de qualité (spécifications dites “non fonctionnelles”), maquettage, modélisation UML et Merise.

### 3. Développement de l’application :

Choix des technologies et outils de développement, développement, tests, mise en production.

## Outils et méthodes de gestion et de suivi de projet

###  Work Breakdown Structure

Permet de diviser les tâches à faire sur plusieurs niveaux.

Le work breakdown structure (WBS), aussi appelé organigramme des tâches du projet décompose un projet en une hiérarchie des travaux nécessaires pour le réaliser.

https://fr.wikipedia.org/wiki/Organigramme_des_t%C3%A2ches_du_projet

###  Planification Gantt et diagramme de PERT

Un diagramme de Gantt permet d’avoir une vue d’ensemble de toutes les tâches de la conception et du développement de l’application, du temps prévu pour chacune des tâches, et des interdépendances entre ces tâches. Il donne à tous les participants (client, product owner, chef de projet, développeurs) une visibilité sur la progression du projet,

Le diagramme de Gantt peut être complété par un diagramme de PERT pour clarifier les dépendances entre les différentes tâches et les points critiques du projet.

[diagramme de Gantt de Jourdebord]

### Développement itératif

Au lieu d'un développement traditionnel en "cascade", l'utilisation d’une méthode dite "agile" ou itérative permet de réaliser le projet avec une visibilité pour tous les participants et une réactivité au cours du projet.

Un développement itératif utilise un cycle PDCA consistant en 4 étapes : planning, design, check, ajustement.

Ce cycle itératif a les avantages suivants: flexibilité, implication du client, identification des risques, livraison rapide, tests en continu, expérimentations.

### Communications

How do you let the stakeholder know the current status, the schedule, the risk, the next step, the deliverables.

Regular meetings, standup meeting, meeting memos, emails, code repository e.g. git, defect/bug tracking, weekly status (for customer).

# Sécurité

Les principaux enjeux de sécurité pour cette application web MVC concernent la protection des données, la prévention des attaques courantes et la gestion des vulnérabilités inhérentes aux applications web. 

Voici une liste des principales questions de sécurité auquelles il faut veiller.

## **Injection SQL** :
   - **Enjeu** : Les requêtes mal sécurisées vers MySQL peuvent permettre à un attaquant d'exécuter des commandes SQL malveillantes, compromettant les données.
   - **Solution dans Symfony** : Utiliser **Doctrine ORM** ou des requêtes préparées pour éviter les injections. Symfony encourage l'utilisation de paramètres liés plutôt que de concaténer des entrées utilisateur dans les requêtes.

## **Cross-Site Scripting (XSS)** :
   - **Enjeu** : Des entrées utilisateur non échappées affichées dans les vues (par exemple, via des templates Twig) peuvent exécuter des scripts malveillants dans le navigateur des utilisateurs.
   - **Solution dans Symfony** : Twig échappe automatiquement les variables par défaut. Toujours activer l'échappement (`{{ variable | e }}`) et valider/sanitizer les entrées utilisateur côté serveur.

## **Cross-Site Request Forgery (CSRF)** :
   - **Enjeu** : Un attaquant peut inciter un utilisateur authentifié à effectuer des actions non désirées (par exemple, modifier un profil) via une requête falsifiée.
   - **Solution dans Symfony** : Symfony fournit des **tokens CSRF** intégrés dans les formulaires. Toujours inclure et valider ces tokens (`{{ csrf_token('form_name') }}`) pour les requêtes POST, PUT, DELETE.

## **Authentification et autorisation** :
   - **Enjeu** : Une mauvaise gestion des sessions, mots de passe faibles ou des permissions mal configurées peut permettre un accès non autorisé.
   - **Solution dans Symfony** : Utiliser le composant **Symfony Security** pour gérer l'authentification (via des providers comme Doctrine) et les autorisations (rôles et voters). Stocker les mots de passe avec un algorithme fort comme `bcrypt` ou `argon2` (configuré par défaut dans Symfony).

## **Fuites de données sensibles** :
   - **Enjeu** : Une mauvaise configuration de MySQL ou de Symfony peut exposer des informations sensibles (par exemple, clés API, mots de passe) via des erreurs ou des fichiers accessibles.
   - **Solution** : Configurer les environnements correctement (utiliser `.env` pour les secrets), désactiver le mode debug en production (`APP_ENV=prod`), et limiter les permissions MySQL (utilisateur avec accès restreint).

## **Attaques par force brute** :
   - **Enjeu** : Les formulaires de connexion peuvent être ciblés pour deviner les identifiants.
   - **Solution** : Implémenter des limites de tentatives de connexion (rate limiting) et utiliser des captchas (par exemple, via un bundle comme `EWZRecaptchaBundle`). Configurer des politiques de mots de passe robustes.

## **Mauvaise gestion des dépendances** :
   - **Enjeu** : Les bibliothèques ou bundles Symfony obsolètes peuvent contenir des vulnérabilités connues.
   - **Solution** : Utiliser **Composer** pour maintenir les dépendances à jour et vérifier les vulnérabilités avec des outils comme `symfony check:security`.

## **Sécurité réseau et transport** :
   - **Enjeu** : Les données transitant entre le client, le serveur Symfony et MySQL peuvent être interceptées si elles ne sont pas chiffrées.
   - **Solution** : Activer **HTTPS** avec un certificat SSL/TLS, utiliser des connexions sécurisées pour MySQL (SSL ou tunnel SSH), et configurer des en-têtes de sécurité (par exemple, HSTS, Content-Security-Policy).

## **Manipulation des fichiers uploadés** :
   - **Enjeu** : Les fichiers envoyés par les utilisateurs (par exemple, images) peuvent contenir du code malveillant ou exploiter des failles si mal gérés.
   - **Solution** : Valider les types de fichiers, limiter leur taille, et stocker les fichiers hors de la racine web avec des noms aléatoires. Utiliser des bibliothèques comme `LiipImagineBundle` pour traiter les images.

## **Exposition des métadonnées ou erreurs** :
  - **Enjeu** : Les messages d'erreur détaillés ou les routes non protégées (comme `/admin`) peuvent révéler des informations sur l'application.
  - **Solution** : Personnaliser les pages d'erreur en production, masquer les détails techniques, et sécuriser les routes sensibles avec des restrictions d'accès via le composant Security.

En résumé, les outils intégrés offerts par Symfony (Security, Twig, Doctrine) pour atténuent les risques de sécurité, associés avec une configuration rigoureuse et des bonnes pratiques. Les enjeux de sécurité ont donc été abordés dès la conception. 

On surveille la sécurité tout au long du cycle de vie de l'application avec des audits réguliers et des mises à jour. Ces audits réguliers nécessitent une combinaison d’outils automatisés (Symfony check:security, OWASP ZAP), de revues manuelles (inspection humain détaillée du code), et de tests proactifs (pentests). En intégrant ces pratiques dans le cycle de développement et en maintenant une veille continue, on peut espérer que l'application Jourdebord peut rester sécurisée dans un environnement où de nouvelles menaces apparaissent constamment.

# Devops, tests, déploiement, validation client

DevOps est une approche collaborative qui combine le développement (Dev) et les opérations (Ops) pour accélérer la livraison de logiciels de qualité via l’automatisation, l’intégration continue (CI) et le déploiement continu (CD). Autant par le passé on séparait les fonctions de développement, avec des développeurs chargés de produire le logiciel, et les fonctions des opérations, chargées de mettre en production le logiciel à disposition des utilisateurs, ces métiers et les technologies disponibles ont permis de combiner les rôles pour qu'une même personne puisse accomplir les deux types de fonction.

## **DevOps et ses principes**
DevOps vise à réduire les silos entre les équipes de développement et d’exploitation en favorisant une culture de collaboration, d’automatisation et d’amélioration continue. Les pratiques clés incluent :
- **Intégration Continue (CI)** : Les développeurs intègrent fréquemment leur code dans un référentiel central (par exemple, Git). Chaque intégration déclenche des tests automatisés pour détecter les erreurs tôt.
- **Déploiement Continu (CD)** : Les modifications validées sont automatiquement déployées dans des environnements comme staging ou production, réduisant les délais de mise en production.
- **Automatisation** : Les processus (tests, déploiements, monitoring) sont automatisés pour minimiser les erreurs humaines.
- **Monitoring et feedback** : Les systèmes en production sont surveillés pour identifier les problèmes et intégrer les retours des clients.

## **Environnements : Dev, Staging, Production**
On peut distinguer 4 types d'environnement correspondant à des étapes distinctes du cycle de vie du logiciel, chaque environnement ayant un rôle spécifique :
- **Environnement de développement local** :
  - Utilisé par chaque développeurs pour coder et tester localement.
  - Contient les versions du code sur lequel le développeur travaille, et suffisamment de code d'autres développeurs pour faire tourner le code en développement.
  - Le développeur se charge des test unitaires et d'intégration des modules dont il est responsable.
- **Environnement de développement (Dev)** :
  - Réplique autant que possible, à plus petite échelle, l’environnement de production (infrastructure, configuration, et données représentatives).
  - Utilisé par les développeurs pour intégrer et tester dans un environnement partagé ressemblant autant que possible à l'environnement de production.
  - Contient les dernières versions du code, souvent instables.
  - Des tests unitaires et d’intégration et de non régression y sont exécutés pour valider les fonctionnalités développées.
- **Environnement de staging** :
  - Réplique l’environnement de production (infrastructure, configuration, données, éventuellement anonymisées).
  - Sert à valider le comportement de l’application dans des conditions proches de la production.
  - **Tests en staging** :
    - **Tests fonctionnels** : Vérifient que les fonctionnalités répondent aux exigences.
    - **Tests de performance** : Mesurent la vitesse et la scalabilité (par exemple, JMeter, Locust).
    - **Stress tests** : Poussent l’application à ses limites (par exemple, surcharge de requêtes) pour identifier les points de rupture.
    - **Tests de sécurité** : Vérifient les vulnérabilités (par exemple, scans OWASP).
    - **Tests de compatibilité** : Valident le comportement sur différents navigateurs ou appareils.
  - Une fois les tests réussis, l’application est prête pour la production.
- **Environnement du serveur de production** :
  - Environnement final où l’application est accessible aux utilisateurs.
  - Doit être stable, sécurisé et surveillé en continu.
  - **Gestion du feedback client** :
    - Les problèmes signalés par les clients (bugs, erreurs, suggestions) sont collectés via :
      - **Systèmes de ticketing** : Outils comme Jira, Zendesk ou ServiceNow pour suivre les incidents.
      - **Field issues** : Problèmes signalés par les utilisateurs sur le terrain, souvent via des formulaires ou des applications.
      - **Gestion des bugs** : Les bugs sont priorisés, assignés aux développeurs et corrigés via des hotfixes ou des mises à jour planifiées.
    - Les métriques (temps de réponse, taux d’erreur, satisfaction client) sont collectées via des outils comme Prometheus, Grafana ou des enquêtes utilisateur.

## **CI/CD : Intégration et déploiement continus**
- **Pipeline CI/CD** :
  - **CI** : Chaque commit déclenche un pipeline automatisé (par exemple, via Jenkins, GitLab CI/CD, GitHub Actions) qui :
    - Compile le code.
    - Exécute des tests unitaires et d’intégration.
    - Génère des rapports de qualité (par exemple, couverture de code avec SonarQube).
  - **CD** : Si les tests passent, le code est automatiquement déployé dans staging ou production, selon la configuration (déploiement continu ou déploiement sur validation manuelle).
- **Outils CI/CD** : Jenkins, GitLab CI, CircleCI, GitHub Actions, Azure DevOps.
- **Avantages** : Réduction des erreurs manuelles, déploiement rapide, feedback immédiat.

## **Validation client**
- **En staging** : Avant le déploiement en production, la validation client peut inclure :
  - **Tests d’acceptation utilisateur (UAT)** : Les clients ou utilisateurs finaux testent l’application dans l’environnement de staging pour confirmer qu’elle répond aux attentes.
  - **Démonstrations** : Présentations des nouvelles fonctionnalités aux parties prenantes.
- **En production** : La validation client se fait via :
  - **Feedback direct** : Collecté via des formulaires, enquêtes ou systèmes de ticketing.
  - **Monitoring utilisateur** : Outils comme Hotjar ou Google Analytics pour analyser le comportement des utilisateurs.
  - **Itérations** : Les retours sont intégrés dans les prochaines versions via le cycle DevOps.

## **Gestion des bugs et feedback en production**
- **Systèmes de ticketing** :
  - Les utilisateurs signalent les problèmes via des outils comme Jira, Zendesk ou Trello.
  - Les tickets sont catégorisés (bug, amélioration, urgence) et assignés aux équipes.
- **Field issues** :
  - Problèmes rencontrés sur le terrain (par exemple, crashs d’application) sont signalés via des journaux d’erreurs (logs) ou des formulaires.
  - Les outils comme Sentry ou LogRocket capturent automatiquement les erreurs en production.
- **Gestion des bugs** :
  - **Priorisation** : Les bugs critiques (impactant les utilisateurs ou la sécurité) sont corrigés en priorité.
  - **Hotfixes** : Correctifs rapides déployés en production sans passer par un cycle complet.
  - **Amélioration continue** : Les bugs récurrents sont analysés pour identifier les causes profondes (root cause analysis).
- **Monitoring proactif** :
  - Outils comme New Relic, Datadog ou Prometheus surveillent les performances et détectent les anomalies.
  - Les alertes automatisées informent les équipes des problèmes en temps réel.

## **Exemple de flux DevOps**
1. Un développeur pousse du code dans un référentiel Git.
2. Le pipeline CI/CD (par exemple, GitHub Actions) compile, teste et valide le code.
3. Le code est déployé automatiquement dans l’environnement de staging.
4. Des stress tests et tests fonctionnels sont exécutés en staging.
5. Une validation client (UAT) est effectuée.
6. Une fois validé, le code est déployé en production.
7. Les utilisateurs signalent des bugs via un système de ticketing (Jira).
8. Les développeurs corrigent les bugs, qui repassent par le pipeline CI/CD.

## **Bonnes pratiques**
- **Automatisation maximale** : Tests, déploiements et monitoring doivent être automatisés pour réduire les erreurs.
- **Environnements cohérents** : Staging doit être une réplique fidèle de la production.
- **Feedback rapide** : Les retours clients et les métriques doivent être intégrés rapidement dans le cycle de développement.
- **Sécurité** : Intégrer des scans de sécurité dans le pipeline CI/CD (par exemple, Snyk, Dependabot).
- **Documentation** : Maintenir une trace des incidents, corrections et retours clients pour l’amélioration continue.

En résumé, DevOps orchestre le cycle de vie du logiciel de manière fluide, en automatisant les tests et déploiements, tout en intégrant les retours clients via des systèmes structurés comme le ticketing et la gestion des bugs. Les environnements dev, staging et production permettent de valider chaque étape, avec des stress tests en staging pour garantir la robustesse et une gestion proactive des feedbacks en production pour assurer la satisfaction client.

# Veille

La **veille** pour un **Concepteur Développeur d'Applications** désigne une activité essentielle visant à maintenir et actualiser les compétences techniques et professionnelles du concepteur développeur face aux évolutions rapides du secteur informatique. Voici une description détaillée basée sur les informations disponibles :

## Définition et objectifs de la veille
La veille consiste à **suivre en continu les évolutions technologiques, réglementaires et méthodologiques** dans le domaine du développement d'applications. Elle permet au professionnel de :
- **Rester informé** des nouvelles technologies, langages de programmation, frameworks, outils de développement, et pratiques émergentes (par exemple, DevOps, nouvelles normes de sécurité, ou architectures web).
- **Anticiper les problématiques de sécurité** en identifiant les vulnérabilités potentielles des technologies utilisées et en adoptant les meilleures pratiques de cybersécurité, comme celles recommandées par l’**ANSSI** (Agence nationale de la sécurité des systèmes d'information).
- **S’adapter aux évolutions réglementaires** liées à la conception responsable de services numériques, comme l’éco-conception ou la conformité aux normes en vigueur.
- **Maintenir une capacité opérationnelle** en restant à jour sur les outils et méthodologies, notamment dans des environnements agiles ou pour des projets multicouches (présentation, métier, persistance).

## Modalités de la veille
Pour le concepteur développeur, la veille s’appuie sur plusieurs pratiques concrètes :
- **Recherche active d’informations** : Consultation de **documentations techniques** (souvent en anglais, niveau B1 requis pour la compréhension écrite et orale, A2 pour l’expression orale), articles spécialisés, blogs, forums, ou publications sur des plateformes comme GitHub, Stack Overflow, ou des sites de référence (ex. : MDN Web Docs, documentation officielle des frameworks).
- **Auto-formation** : Apprentissage autonome via des tutoriels, MOOCs, ou formations en ligne pour maîtriser de nouvelles technologies ou approfondir des compétences existantes.
- **Échanges professionnels** : Collaboration avec d’autres développeurs, participation à des communautés techniques, ou échanges avec des experts (parfois à l’international, nécessitant des compétences en anglais).
- **Suivi des appels d’offres et projets** : Identifier les opportunités de projets innovants ou les besoins spécifiques des clients pour orienter son développement de compétences.

## Contexte d’application dans la formation RNCP 37873
Dans le cadre de cette formation, la veille est intégrée comme une **compétence transversale** essentielle. Le concepteur développeur doit :
- **Analyser les évolutions** pour adapter ses pratiques aux standards de l’industrie (ex. : nouvelles versions de langages comme JavaScript, Python, ou frameworks comme React, Angular).
- **Intégrer les recommandations de sécurité** dans toutes les étapes de conception et de développement (interfaces, bases de données, applications multicouches).
- **Collaborer avec des interlocuteurs variés** (clients, chefs de projet, équipes agiles) en s’appuyant sur une connaissance actualisée des outils et méthodologies.

## Importance pour le métier
La veille est cruciale pour :
- **Garantir la pertinence des solutions développées** en répondant aux attentes des utilisateurs et aux contraintes du marché.
- **Assurer la compétitivité** du professionnel dans un secteur où les technologies évoluent rapidement.
- **Contribuer à la qualité et à la sécurité** des applications, en évitant l’obsolescence des outils ou l’introduction de vulnérabilités.

## Sources et outils de veille
- **Sources techniques** : Documentation officielle, blogs technologiques (ex. : Medium, Dev.to), newsletters spécialisées.
- **Réseaux professionnels** : Événements, meetups, conférences (ex. : DevFest, Web Summit).
- **Réglementations** : Suivi des publications de France Compétences, de l’ANSSI, ou des normes européennes (ex. : RGPD pour la protection des données).
- **Outils Qualiopi** : Pour les organismes de formation, des solutions comme **Veille Formation** aident à structurer la veille légale, technologique, et pédagogique pour répondre aux exigences du référentiel Qualiopi.[](https://www.veilleformation.com/)

En résumé, pour la formation RNCP 37873, la veille est une démarche proactive et structurée permettant au concepteur développeur de rester à la pointe des innovations technologiques, de garantir la sécurité des applications, et de répondre aux besoins évolutifs des clients et du marché. Cette compétence est évaluée dans le cadre de la certification, notamment via des mises en situation professionnelle et la rédaction d’un dossier professionnel.[](https://www.francecompetences.fr/recherche/rncp/31678/)[](https://www.cefim.eu/formations/concepteur-developpeur-dapplications/)[](https://educentre.fr/articles/reac-rc-re-RNCP31678-concepteur-developpeur-dapplications-qjq)

## Recherche anglophone

### Explication

[à remplir]

### Traduction

[à remplir]

\newpage

# Conclusion

## Objectifs

J'avais trois objectifs avec ce cursus :

## 1. Savoir répondre à une question fréquente

Quand quelqu'un me demande :

> Pourrais-tu me faire un site Web ?

pouvoir répondre sans hésiter : Oui !

C'est une question fréquente. J'ai déjà, par le passé, contribué à réaliser des sites Web professionnellement, en collaboration avec d'autres et en travaillant dans une société qui m'employait comme salarié.

Mais grâce à ce cursus, j'ai plus de confiance sur comment répondre à cette question de manière professionnelle. Je pense maintenant être capable de m'engager personnellement et indépendamment sur un résultat chiffrable au niveau de la conception, de la technique, et des délais.

## 2. Faire de mon idée d'application un prototype

Ce prototype Jourdebord, je suis heureux d'en disposer de manière fiable pour ma propre utilisation, en remplacement des outils que j'utilisais précédemment, dont certains sont mentionnés dans la section ci-dessus, ["Étude de l’existant"](#étude-de-lexistant)

J'aimerais aussi pouvoir partager cet outil avec des proches, que cela pourrait intéresser à différents titres. C'est un outil qui, espérons-le, pourrait leur être utile. Ce serait également une forme de bêta-test pour un outil qui n'a encore véritablement été testé que par moi-même.

Enfin, dans un avenir légèrement plus lointain, une fois l'appli éprouvée avec succès par quelques volontaires bienveillants, pourquoi ne pas mettre l'appli à disposition d'un plus large public ? Ceci dans un cadre à définir, avec une solution réaliste de financement durable.

Mais avant de tenter une distribution plus large de l'application, si le temps et les ressources le permettent, il est probable que je repasserai par un cycle de conception et de développement, quitte à complètment réécrire l'application. Ceci pour tenter de profiter des enseignements provenant de l'utilisation de l'application. Je pourrais notamment envisager un autre système de stockage des données textuelles que le système actuel de base de données relationnelle. Une telle réécriture "from scratch" serait néanmoins faite en tentant d'échapper à l'écueil fréquent appelé "syndrome du deuxième système", où l'on perd les avantages de l'application existante en tentant de la reconcevoir, résultant en une nouvelle version de l'application éventuellement plus complexe, moins efficace, avec des nouveaux bugs, etc.

## 3. Obtenir un diplôme en informatique

Je souhaiterais pouvoir justifier de mes compétences, pas juste par mon expérience professionnelle d'autodidacte, mais aussi au niveau académique.

Et si l'occasion se présentait, pouvoir éventuellement poursuivre plus loin mes études en informatique.

Un diplôme me permettrait aussi de justifier de ma capacité à partager mes connaissances en les enseignant.

## En somme

J'espère avoir modestement réussi à accomplir ces objectifs.

Et j'ai hâte d'appliquer ce que j'ai appris concrètement :

* dans le monde du travail,

* et pour faire évoluer l'application Jourdebord.

