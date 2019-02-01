# Architecture de l'app

L'application est construite en utilisant le framework [nuxt.js](https://nuxtjs.org), qui est une surcouche a vue js, qui offre des outils suplémentaires et une structure de doosiers prédéfinie dans l'objectif de construire des application complètes.

Nuxt fourni (entre autres) :

* Un système standardiser pour installer des plugins vue.
* Une configuration centralisée (fichier `nuxt.config.js`).
* La génération du routing automatique (en observant le dossier `pages`).
* Un système de middleware (qui permet d'utiliser de manière plus éléguante les hooks de vue-router).
* Le server rendering (désactivable, non utilisé dans ce projet)
* ...

## Aspect visuel

Pour le style, j'ai utilisé une librairie css/js similaire a bootstrap [buefy](https://buefy.github.io/documentation), qui est en fait un set de composants vue js qui utilisent les styles css du framework [bulma](https://bulma.io/documentation/). Ce la permet de rapidement crée une aplication cohérente avec vue.

Bulma est donc une librairie qui contient uniquement du css.
Buefy, utilise ces styles css, et y rajoute des composants vue.js, par ex :
* Des inputs
* Des paginations
* Un système de tables
* Des modal box
* Des toast (pour afficher un message a l'utilisateur)
* Et pleins d'autres [liste ici](https://buefy.github.io/documentation)

## Structure de dossiers

* `.nuxt` contiend des fichers utilisées en interne par nuxt
* `assets` les assets de votre application (images)
* `components` vos composants vue.js
* `docs` documentation du projet
* `layouts` composants vue qui définisent le layout de base d'une page (on y retrouve la navigation)
* `middleware` Les middlewares de l'app
* `pages` contient des composants vue qui représentes les pages de l'application
* `plugins` contient la logique d'installation de plugins
* `static` vos assets qui ne seront pas compités par webpack
* `store` votre store vuex (pas utilisé ici)

## Structure de l'app

L'app est divisée en deux parties :
* Non authentifié
* Authentifié

### Non authentifé

Très simple, concerne uniquement les utilisateurs non connectés, cette partie utilise le layout [logged_out](../layouts/logged_out.vue), qui définir aucunne navbar.
On retrouve deux pages dans cette partie :
* [login](../pages/login.vue) - le formulaire de connexion
* [index](../pages/index.vue) - notre page d'aceuil

### Authentifié

Cette partie est accesible uniquement une fois connecté, voir [système de login](./systeme_de_login.md) pour plus de détails sur la procédure de connexion.
Cette partie utilise le layout [logged_in](../layouts/logged_in.vue) qui définis juste une navigation commune a toute les pages du dasboard.
Toutes les pages du dasboard, nesseitent d'être authentifié, c'est ici qu'on retrouve les diférentes pages pour créer/modifier les quizz et questions.