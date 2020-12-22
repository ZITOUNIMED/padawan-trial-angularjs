# Rite de passage du padawan Front

## Préambule

L'objectif principal de ce test est de nous permettre d'évaluer votre coding style, votre rigueur et votre capacité à produire du beau code.  
Pour répondre à nos besoins, vous devrez travailler avec l'application fournie basée sur [AngularJS Material Starter (Typescript)](https://github.com/angular/material-start/tree/typescript)

## AngularJS

Une application AngularJS a été installée au préalable afin de vous aider à commencer le test.  
Vous pouvez lancer l'application via la commande `npm run start`.

## JSON Server

Ce test utilise `json-server` pour simuler une api REST.
https://github.com/typicode/json-server
La db est stockée dans le fichier json `db.json` situé à la racine du projet.

Vous pouvez lancer l'api REST avec la commande `npm run server`.

## Les épreuves

### Épreuve 1
Votre première épreuve consistera à afficher la vente déjà créée et ses lots dans l'application AngularJS.

### Épreuve 2

Votre application devra permettre de créer une vente avec des lots et de les persister dans le fichier `db.json`.

### Épreuve 3

Créer une nouvelle vue dans laquelle il sera possible de rechercher parmis les ventes et les lots avec un seul champ `input`.
Cet unique champ de recherche sera capable de trouver des ventes et des lots, à vous de trouver un moyen de les distinguer dans les résultats.

