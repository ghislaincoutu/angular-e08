#!/bin/bash
function apply_pause() {
  read -p "$*"
}
echo "Copie du code HTML et TypeScript dans les fichiers code-preview"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

# Source (so)
so=/home/Exercises/angular-e08/src/app
# Destination (de)
de=/home/Exercises/angular-e08/src/assets/code-preview/

cp $so/highlight01.directive.ts $de/highlight01/
mv $de/highlight01/highlight01.directive.ts $de/highlight01/typescript.txt

cp $so/transform01.pipe.ts $de/transform01/
mv $de/transform01/transform01.pipe.ts $de/transform01/typescript.txt

cp $so/t01/t01.component.html $de/t01/
mv $de/t01/t01.component.html $de/t01/html.txt
cp $so/t01/t01.component.ts $de/t01/
mv $de/t01/t01.component.ts $de/t01/typescript.txt

cp $so/t02/t02.component.html $de/t02/
mv $de/t02/t02.component.html $de/t02/html.txt
cp $so/t02/t02.component.ts $de/t02/
mv $de/t02/t02.component.ts $de/t02/typescript.txt

cp $so/t03/t03.component.html $de/t03/
mv $de/t03/t03.component.html $de/t03/html.txt
cp $so/t03/t03.component.ts $de/t03/
mv $de/t03/t03.component.ts $de/t03/typescript.txt
