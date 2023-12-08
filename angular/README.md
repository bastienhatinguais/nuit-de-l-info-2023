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
