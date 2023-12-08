# Angular

Version de node nécessaire : 18.18.12



Pour lancer le projet faire npm i dans le dossier angular.

Faire un `npm run start` ce qui lancera le front sur `localhost:4200` avec les requetes qui se feront directement sur le server de production (`api.nuit-de-l-info-2023.duckdns.org`).

Sinon, utiliser `npm run dev` pour pointer vers le back local.

`npm run build` permet de générer l'application buildée.



# Laravel

Installer php 8.2.

Installer composer.

Dans le repertoire laravel :

Faire `composer install`

Faire `./vendor/bin/sail up -d` ce qui lancera le serveur en local.

Faire `./vendor/bin/sail artisan migrate:fresh --seed` afin de peupler la bdd.



Le code se déploie automatiquement sur un server hébergé par DigitalOcean via un processus sur github action dont les étapes sont réalisées dans `deploiement.yml`.



Le site est accessible sur `http://nuit-de-l-info-2023.duckdns.org`.



# Concept

L'application est un jeu sous forme de quiz. Après l'inscription, l'utilisateur pourra accéder à un enchaînement de 10 questions en rapport avec les idées reçues sur le changement climatique et ses problématiques.

L'utilisateur aura accès pour chaque question à une description ainsi que d'une source de documentation s'il souhaite en savoir plus.

A la fin du quiz, il aura un score ainsi que son classement général par rapport aux autres joueurs.

Il aura également à disposition un espace "Révision" qui regroupera toutes les questions qu'il aura déjà vu ainsi que les réponses.

Il aura également à disposition un menu permettant de modifier la police du site destinée aux dyslexiques.