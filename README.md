# ADE Redesign

`ADE Redesign` est un projet qui a pour objectif de proposer une nouvelle interface de visualisation des emplois du temps aux étudiants scolarisés dans un établissement d'enseignement supérieur qui utilise Adesoft&#xAE;.

Ce projet comporte différentes versions et instances.

-   `dev` : Version de développement, utilisée pour le développement du projet. Merci de ne pas pour référer à cette version pour consulter les emplois du temps.
-   [`beta`](https://beta.ade-edt.fr) : Version bêta, utilisée pour tester les fonctionnalités du projet avant leur publication dans la version stable. Merci de faire remonter les éventuels bugs rencontrés.
-   `prod` : Version stable, utilisée pour la consultation des emplois du temps.
    -   [`iutv`](https://iutv.ade-edt.fr) : Instance de l'IUT de Valence.

_Pour davantage d'informations sur le projet, merci de vous reporter à la [page d'accueil](https://github.com/CHALENCON-Yoan/ade-redesign/blob/main/README.md)._

## 🗂️ Historique des Versions

_Vous pouvez retrouver ci-dessous l'historique des versions du site classées par ordre chronologique inverse (la version la plus ancienne est donc à la fin). Pour chaque version, le détail des modifications apportées est indiqué._

> <u>Légende</u> :
>
> -   &#x1F516; : Version majeure
> -   &#x1F41B; : Version mineure
> -   &#x1FA79; : Version de révision
> -   &#x1F9EA; : Version bêta

&nbsp;

-   **&#x1F9EA; [2.0.1.a](https://github.com/CHALENCON-Yoan/ade-redesign/commit/beta) : Correctif largeur _pop-ups_ sur mobile**

    -   Ajout d'une propriété CSS pour adapter la largeur des _pop-ups_ sur mobile.

-   **&#x1FA79; [2.0.1](https://github.com/CHALENCON-Yoan/ade-redesign/commit/iutv) : _Pop-up_ d'annonces/informations dynamique** - _Version Actuelle_

    -   La _pop-up_ pour les annonces et informations est désormais dynamique.

-   **&#x1F9EA; [2.0.0.b](https://github.com/CHALENCON-Yoan/ade-redesign/commit/6a757d54b035120a85e0e6f5002a17b594f34c61) : Modification du message par défaut pour les annonces**

    -   Remplacement d'un ancien message (affiché par défaut) par un texte indiquant qu'il n'y a aucune annonce actuellement.
    -   Ce texte ne sera normalement jamais affiché.

-   **&#x1F9EA; [2.0.0.a](https://github.com/CHALENCON-Yoan/ade-redesign/commit/caecd68b6bc8916d0411d7bf1a28bef448a751a4) : Dynamisation des annonces/informations**

    -   Adaptation de la _pop-up_ d'annonce pour enrichir le contenu dynamiquement grâce à un appel API.
    -   Stockage en `localStorage` de la lecture des annonces pour ne pas l'afficher si elle a déjà été lue.
    -   Ajout d'un émoji pour les informations.

-   **&#x1F516; [1.1.1](https://github.com/CHALENCON-Yoan/ade-redesign/commit/5c9f32a2e826574d91d156e80d4e5bd021e5abb7) : Publication de la première version**

    -   Mise en place de la page d'accueil contenant les liens vers les instances des emplois du temps (uniquement l'IUT de Valence pour l'instant).
    -   Ajout d'une page `À propos` pour donner plus d'informations sur ADE Redesign.
    -   Ajout des pages légales (CGU, Mention Légales, Politique de Confidentialité).

-   **&#x1F9EA; [1.1.1.k](https://github.com/CHALENCON-Yoan/ade-redesign/commit/2011a77f2435450a0bb0eacfca0c2056a5222c6b) : Annonce de la publication de la première version**

    -   Ajout d'une _pop-up_ d'annonce pour indiquer que la première version d'ADE Redesign est disponible.

-   **&#x1F9EA; [1.1.1.j](https://github.com/CHALENCON-Yoan/ade-redesign/commit/7bbe8b1a72b165ee30fd29ef145280a9fa6d3993) : Correction du style**

    -   Ajout de polices d'écriture supplémentaires sur les `button` et les `input`.
    -   Suppression d'une propriété CSS destinée au _responsive_ qui n'était pas utilisée.
    -   Simplification de la mise en couleur des liens sur les _pop-ups_ d'erreur (une classe était déjà destinée à cela).
    -   Suppression des icones non utilisés.

-   **&#x1F9EA; [1.1.1.i](https://github.com/CHALENCON-Yoan/ade-redesign/commit/590c45abb7227bca8b47f2dcd0944d7d4bca3fb8) : Correction des _favicons_**

    -   Correction des _favicons_. La _favicon_ de taille `32x32` était manquante.

-   **&#x1F9EA; [1.1.1.h](https://github.com/CHALENCON-Yoan/ade-redesign/commit/3b15ae385c1a3a8fbff78980aa239a808c388995) : Correction d'un _bug_ d'ajout d'écouteurs d'événements**

    -   Correction du sélecteur d'élément lors de l'ajout des écouteurs d'événements sur les boutons permettant l'ajout de la ressource courante en favoris.

-   **&#x1F9EA; [1.1.1.g](https://github.com/CHALENCON-Yoan/ade-redesign/commit/336423a27e0f81b6b94684374feecee18fb46910) : Correction des erreurs de la précédente version**

    -   Correction d'une erreur d'orthographe dans une balise `meta`.
    -   Mise à jour de la description de la page `Enseignants`.
    -   Correction des fichiers de _favicons_.
    -   Renommage du fichier `color.js` en `colors.js`.

-   **&#x1F9EA; [1.1.1.f](https://github.com/CHALENCON-Yoan/ade-redesign/commit/0d472c98a849a5d78f1a79cb55bc098cb462b121) : _Refactoring_, correction de _bugs_ et amélioration de la gestion des erreurs**

    -   Ajout du bouton de mise en favoris manquant sur le `header` (il était uniquement disponible dans la _sidebar_).
    -   _Refactoring_ du code JavaScript, séparation du fichier principal en plusieurs petits fichiers.
    -   Correction de l'affichage tardif du _loader_ lors d'une demande d'affichage des prochains cours.
    -   Correction d'éventuelles boucles infinies lors de l'affichage des prochains cours si la dernière ressource enregistrée est nulle ou s'il n'y a plus de cours pour cette ressource jusqu'à la fin de l'année universitaire (délimitation au 31 juillet).
    -   Mise à jour du message d'erreur affiché en cas d'échec d'une requête (modification du mail généré) et ajout d'un message spécifique en cas de non-réponse du serveur de l'emploi du temps.
    -   Mise à jour du logo, des _favicons_ et de la bannière.
    -   Correction du décalage sur l'affichage des jours au-dessus des cours.

-   **&#x1F9EA; [1.1.1.e](https://github.com/CHALENCON-Yoan/ade-redesign/commit/59dcd791fc9c913450c1d1885edac12f52e51f8e) : Correction de _bugs_ d'affichage des cours**

    -   Modification des données du projet d'emploi du temps pour correspondre à la nouvelle version déployée sur ADE par la composante de l'IUT de Valence.
    -   Correction du décalage d'un jour dans la date affichée lors de l'affichage des emplois du temps entre minuit et 2h (problème dû au fuseau horaire).
    -   Mise à jour des chemins d'accès aux fichiers CSS et JavaScript ainsi que de l'URL pour les requêtes à l'API. Ils sont désormais absolus et non relatifs pour permettre le fonctionnement total du site depuis des sous-dossiers.
    -   Mise à jour des _favicons_ des pages pour améliorer leur qualité. Les fichiers étaient au format SVG mais n'étaient pas supportés de partout. Ils sont désormais en PNG.
    -   Correction du non-affichage du prochain jour de cours lorsque tous les cours de la journée sont terminés. La comparaison de l'heure de fin des cours d'une journée avec l'heure courante n'était pas correcte.
    -   Correction de l'impossibilité d'afficher une semaine de cours "à cheval" sur 2 mois en utilisant une date du second mois. L'édition de la date utilisée pour récupérer les cours lorsque la date sélectionnée n'est pas celle du début de la semaine était erronée.
    -   Modification du nom de la fonction permettant de récupérer la date du début de la semaine pour une date donnée.

-   **&#x1F9EA; [1.1.1.d](https://github.com/CHALENCON-Yoan/ade-redesign/commit/145751dd57f0e0a4ff3b62d7ba6ad78847c7a0c3) : Ajout de Google Analytics**

    -   Ajout du script pour Google Analytics.

-   **&#x1F9EA; [1.1.1.c](https://github.com/CHALENCON-Yoan/ade-redesign/commit/24b130fac6a7f22d0b9e650b7f9d6ffe306a4092) : Ajout d'un `footer` & Correction du _bug_ empêchant l'ajout des événements commençant à XXh15 ou XXh45**

    -   Ajout de la prise en charge des événements qui commencent à XXh15 et à XXh45.
    -   Ajout d'un footer contenant le copyright du site (avec lien vers la page d'accueil pour retrouver les pages légales).
    -   Correction de la largeur du `body` pour prévenir un défilement horizontal non désiré.

-   **&#x1F9EA; [1.1.1.b](https://github.com/CHALENCON-Yoan/ade-redesign/commit/25ac5bf9e86fcff82e0f6a5f597a1093bca97470) : Correction d'une erreur d'orthographe**

    -   Correction d'une erreur d'orthographe dans une balise `meta` sur la page `classrooms`.

-   **&#x1F9EA; [1.1.1.a](https://github.com/CHALENCON-Yoan/ade-redesign/commit/0bc6ba649543df8f88fc5b67bcdf269bff9fe067) : Première version**

    -   _Redesign_ complet du `header` avec l'ajout de nouvelles options.
    -   Mise en place d'une _sidebar_ pour les écrans ne permettant l'affichage de toutes les options.
    -   Réimplémentation de l'affichage des emplois avec réécriture du code JavaScript.
    -   Ajout de la prise en charge du _dark mode_.
    -   Ajout d'une _popup_ indiquant qu'une erreur est survenue.
    -   _Redesign_ du _modal_ de chargement.
    -   L'interface est entièrement _responsive_.
    -   Les emplois du temps des enseignants et des salles sont disponibles sur leur page respective.

-   **&#x1FA79; [0.2.5](https://github.com/CHALENCON-Yoan/ade-redesign/commit/8e203b843ae3eb13190281b7f02d634caa7bd001) : Ajout d'un historique de versions**

    -   Ajout d'un historique de versions dans le README.

-   **&#x1F9EA; [0.2.5.a](https://github.com/CHALENCON-Yoan/ade-redesign/commit/e2c76019ae9840ec227cc25f0bcc180e603ede82) : Ajout d'un historique de versions**

    -   Ajout d'un historique de versions dans le README.

-   **&#x1FA79; [0.2.4](https://github.com/CHALENCON-Yoan/ade-redesign/commit/570447d1ad3cfbaee67aa19df4a06678c34f649d) : Suppression de la zone de surbrillance au clic sur mobile**

    -   Suppression de la zone de surbrillance bleue qui apparaît sur les mobiles utilisant un navigateur basé sur WebKit.

-   **&#x1FA79; [0.2.3](https://github.com/CHALENCON-Yoan/ade-redesign/commit/c5dc0db7609b967ca019d4a93e46bb6b3d7504e6) : Remplacement d'un espace par un espace insécable**

    -   Remplacement d'un espace entre un mot et un point d'exclamation par un espace insécable afin que le dernier mot de la phrase et le point d'exclamation soient toujours sur la même ligne.

-   **&#x1FA79; [0.2.2](https://github.com/CHALENCON-Yoan/ade-redesign/commit/d9986c6214234eb0a8cf4abbcdb6e3d46fef4540) : Mise à jour du README**

    -   Mise à jour du README pour indiquer qu'une version bêta est disponible (lien inclus).

-   **&#x1F9EA; [0.2.2.a](https://github.com/CHALENCON-Yoan/ade-redesign/commit/27306b379b3617c6b2edbdc5d4d4047621c47392) : Ajout d'un README**

    -   Ajout du README (légèrement adapté) à la version bêta.

-   **&#x1F41B; [0.2.1](https://github.com/CHALENCON-Yoan/ade-redesign/commit/d112d04aa6eec26bb5fcc322d8ee3d2388954356) : En cours de construction - Version bêta disponible**

    -   Modification du texte de la page d'accueil avec ajout du lien vers la
        version bêta.

-   **&#x1F9EA; [0.2.0.g](https://github.com/CHALENCON-Yoan/ade-redesign/commit/4f640f48aad6bb5cb1df61174d8a2f08e1d98c48) : Mise à jour de l'interruption du défilement de la bannière d'information**

    -   Modification de l'élément déclenchant la mise en pause de l'animation de défilement du texte de la bannière d'information (`header` au lieu de `p`).

-   **&#x1F9EA; [0.2.0.f](https://github.com/CHALENCON-Yoan/ade-redesign/commit/df133215042b275e4ddc54bad54c6c2edd0a5506) : Ajout d'une redirection 404**

    -   Ajout d'une redirection vers la page principale en cas d'erreur 404.

-   **&#x1F9EA; [0.2.0.e](https://github.com/CHALENCON-Yoan/ade-redesign/commit/fdad910bf9d6fe763495c3a12fe3c92a0a4a935b) : Ajout d'une bannière d'information pour la version bêta et correction de l'emplacement de marges**

    -   Ajout d'une bannière en haut de la page pour informer sur la version bêta courante (version alpha avec mise à jour pour l'année universitaire 2024/2025).
    -   Correction de l'emplacement de la marge de 8 pixels sur le `body` (désormais sur les éléments enfants (elle sera, à nouveau, déplacée dans de futures versions, lors de la réfection de la structure de la page)).

-   **&#x1F9EA; [0.2.0.d](https://github.com/CHALENCON-Yoan/ade-redesign/commit/7fbb24a6bdc05e6867c3fa7e7b6b3d400949d79e) : Correction de la durée des événements et modification de l'URL de _fetch_ pour récupérer les événements**

    -   Mise à jour de la hauteur des "cases" des événements en raison du changement d'unité sur la durée des événements (1 équivaut désormais à 15 minutes et non plus à 30 minutes).
    -   Modification de l'URL utilisée lors du _fetch_ pour la récupération des événements (les variables globales n'étaient pas utilisées).

-   **&#x1F9EA; [0.2.0.c](https://github.com/CHALENCON-Yoan/ade-redesign/commit/6c42c85162704e7ba1a743971bc79687ea40d3b1) : Correction de l'URL de _fetch_ pour la liste des ressources**

    -   Correction de l'URL utilisée lors du _fetch_ pour la récupération de la liste des ressources (la variable globale `BASE_URL` avait été omise).

-   **&#x1F9EA; [0.2.0.b](https://github.com/CHALENCON-Yoan/ade-redesign/commit/3f12919725faf8c46a2420ad8cd73d51dbeb7eb9) : Mise à jour pour l'année universitaire 2024/2025**

    -   Modification du serveur de récupération des emplois du temps en raison de la migration vers l'ADE de l'UGA par la composante de l'IUT de Valence.
    -   Mise à jour de l'utilisation de l'API avec des variables globales.
    -   Ajout d'un fichier représentant la liste des ressources afin de simplifier les tests locaux lors du développement.
    -   Suppression de l'alerte indiquant le non-fonctionnement des emplois du temps en raison de la migration.

-   **&#x1F9EA; [0.2.0.a](https://github.com/CHALENCON-Yoan/ade-redesign/commit/2ee059a3f99170b3463a720b4f8c2f3a635ba827) : Déploiement de la version alpha**

    -   Déploiement de la version temporaire du site en tant que version alpha. Il s'agit de la version utilisée lors de l'année universitaire 2023/2024.

-   **&#x1FA79; [0.1.8](https://github.com/CHALENCON-Yoan/ade-redesign/commit/adcf7363b9ae03e61bb0f829d5abb21957682481) : Suppression de la licence de la police d'écriture**

    -   Suppresion de la licence de la police d'écriture _Aptos_ (la présence de ce fichier influençait le type de fichier du dépôt GitHub).

-   **&#x1FA79; [0.1.7](https://github.com/CHALENCON-Yoan/ade-redesign/commit/ba59252f0db78deb115fbe89bfa8158df5e65be5) : Définition du mode clair par défaut**

    -   Mise à jour du mode par défaut pour que ce soit le mode clair.
    -   Correction de certains commentaires JavaScript.

-   **&#x1FA79; [0.1.6](https://github.com/CHALENCON-Yoan/ade-redesign/commit/f728e4193eb7fcaa964febbacb41260d8917d4a8) : Ajout du nom du site sur la prévisualisation**

    -   Ajout du nom du site sur la prévisualisation.
    -   Mise à jour du titre sur la prévisualisation (anciennement utilisé pour le nom du site).

-   **&#x1FA79; [0.1.5](https://github.com/CHALENCON-Yoan/ade-redesign/commit/a8962d73f9250a9192d11c4cbd8a990ed97ea437) : Correction du chemin d'accès à l'image pour la prévisualisation**

    -   Mise à jour du chemin d'accès au logo faisant office d'image sur la prévisualisation (sous-dossier manquant).

-   **&#x1FA79; [0.1.4](https://github.com/CHALENCON-Yoan/ade-redesign/commit/53dc4a720e3e728f41872acdd8eb52d85e2ea22b) : Nouvelle correction de la redirection 404**

    -   Mise à jour de la redirection 404 (`/*` vers `/index.html`).

-   **&#x1FA79; [0.1.3](https://github.com/CHALENCON-Yoan/ade-redesign/commit/807b22cc6ab02f132f3de167c74c4ce93da154ff) : Correction de la redirection 404**

    -   Tentative de mise à jour de la redirection 404 (`/*` vers `/`).

-   **&#x1FA79; [0.1.2](https://github.com/CHALENCON-Yoan/ade-redesign/commit/62fe22ba0a19f7662996b96af95c29bd7c07357c) : Ajout du logo et d'une redirection 404**

    -   Déplacement du logo dans un sous-dossier et ajout de 3 autres versions (`png` et couleurs).
    -   Modification du fichier image pour les prévisualisations.
    -   Ajout du logo du site dans le `header` avec prise en charge du changement de mode.
    -   Modification du curseur au survol du _switch_ de mode.
    -   Ajout de la redirection vers la page d'accueil en cas d'erreur 404 (depuis `/**/*` vers `/`).

-   **&#x1F516; [0.1.1](https://github.com/CHALENCON-Yoan/ade-redesign/commit/470fc5a3d4efc80ad142733e3e523e3937f8626c) : En cours de construction**

    -   Ajout du logo (temporaire), du _favicon_ et du _switch_ de mode (sombre/clair).
    -   Ajout de la police d'écriture _Aptos_ (Microsoft&#xAE;).
    -   Ajout de la page d'accueil indiquant que le site est en développement et qu'une version bêta sera bientôt proposée.
    -   Ajout de scripts JavaScript pour gérer le mode clair et sombre.

&nbsp;

<p style="text-align: center;">© 2024 <a href="https://ade-edt.fr">ade-edt.fr</a></p>
