# Systeme de login

Le système de login est assez simple, il utilise le token fourni par l'api lors de la connexion.

3 composants intérviennent :

## Login

Lors de la connexion, le token est sauvegardé dans le local storage, afin qu'il soit persisté après rechargement de la page.

## Logout

Lors du logout, le token est simplement suprimé du local storage, el l'utilisateur est redirigé vers la homepage.

## Le middleware auth

Ce middleware [ici](../middleware/auth.js) se charge de vérifier que le token existe bien lorsque vous accédez a une page qui nésesite d'être authentifié.

Il sera executé a chaque action de routing dans l'application, si vous tentez d'acceder a une page sans authentificarion, vous serez redirigé vers la page de connexion.