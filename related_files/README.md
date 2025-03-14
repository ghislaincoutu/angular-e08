# angular-e08 &mdash; Programmation de divers composants et services Angular (E08)
[README](../README.md) &mdash; Angular

## Démonstration
https://ghislaincoutu.ca/d002/angular-e08

## Paquets NPM à installer
```sh
npm install bootstrap
```

## Commandes Angular à exécuter pour générer les composants de l'exercice
```sh
ng generate environments
ng generate component menu
ng generate component t01
ng generate component t02
ng generate component t03
ng generate component t04

ng generate pipe transform01
ng generate pipe transform02
ng generate pipe transform03
ng generate directive highlight01
```

## Ajout des fichiers Boostrap au projet Angular
Pour que les fichiers Bootstrap soient pris en compte dans le projet, il faut ajouter les fichiers CSS et JavaScript dans le fichier **angular.json**, dans la section _build_ :
```json
{
  "build": {
    "styles": [
      "node_modules/bootstrap/dist/css/bootstrap.css",
      "src/styles.scss"
    ],
    "scripts": [
      "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]
  }
}
```

## Ajout de paramètres dans le fichier angular.json
Dans le fichier **angular.json** il faut ajouter le paramètre _optimization_ et augmenter les valeurs dans le paramètre _budgets_.
```json
"configurations": {
  "production": {
    "optimization": {
      "scripts": true,
      "styles": {
        "minify": true,
        "inlineCritical": false
      },
      "fonts": true
    },
    "budgets": [
      {
        "type": "initial",
        "maximumWarning": "800kB",
        "maximumError": "1.2MB"
      },
      {
        "type": "anyComponentStyle",
        "maximumWarning": "4kB",
        "maximumError": "8kB"
      }
    ],
    "outputHashing": "all"
  },
  "development": {
    "optimization": false,
    "extractLicenses": false,
    "sourceMap": true
  }
},
```
