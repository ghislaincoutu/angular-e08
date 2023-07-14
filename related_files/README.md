# angular-e08 &mdash; Programmation d'un filtre de recherche personnalisé avec le module ng2-search-filter

## Démonstration
https://ghislaincoutu.ca/r002/angular-e08

## Paquets NPM à installer
```sh
npm install bootstrap
npm install ng2-search-filter
```

## Commandes Angular à exécuter pour générer les composants de l'exercice
```sh
ng generate component menu
ng generate component t01
ng generate component t02
```

## Ajout des fichiers Boostrap au projet Angular
Pour que les fichiers Bootstrap soient pris en compte dans le projet, il faut ajouter les fichiers CSS et JavaScript dans le fichier **angular.json**, dans la section _build_ :
```
"build": {
  ...
    "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.css",
      "src/styles.scss"
    ],
    "scripts": [
      "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]
  ...
  },
}
```