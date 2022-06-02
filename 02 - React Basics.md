# REACT BASICS

## Components

### Qu'est ce que sont les composants

Un composant est un block (réutilisable) qui réunit impérativement du HTML, du JS et optionnellement du CSS.
Un composant peut être intégré dans un autre composant de manière a construire l'interface utilisateur.
Permet de :

- réutiliser des elements (on ne se repète pas)
- modulariser dans des fichiers qui ont une fonction spécifique (plus simple pour la maintenabilité, pour s'y retrouver, etc.)

Mais au final, un composant est juste une function javascript un peu spéciale.

On crée un composant dans un fichier avec un nom ou la 1è lettre de chaque mot est en majuscule
On déclare le composant qui est une function qui renvoie un etat (state)
On exporte la function dans ce même fichier
Dans le fichier parent, on importe le composant enfant en utilisant le nom qu'on utilisé lors de l'export
On appelle le composant comme un element HTML (il faut ABSOLUMENT utiliser un nom qui commmence par une majuscule pour que React comprenne qu'il s'agit d'un element HTML custom)

Passer des attributs d'un composant parent a un autre : props

#### Approche déclarative

On déclare l'état de la cible, et c'est React qui se charge de créer les liens dans le DOM

## Lancer un nouveau projet React

### Analyse d'un projet React standard

Le 1er fichier exécuté est le fichier index.js

### App.js

Composant principal rendu dans le index.js. Nos composants seront imbriqués dans ce composant principal, le tout représentant un "arbre de composants". Le composant custom HTML `<App/>` est le seul rendu (pas besoin de rendre tous les elements dans le fichier App.js)

#### index.js

En JSX.
Import de react-dom (react et react-dom représentent les packages core de React JS)
.createRoot est la methode qui défini le point principal de l'UI, défini a React ou l'UI doit être rendue (passée en parametre). On peut ensuite utiliser la methode .render pour créer l'app.

#### Dossier "public"

##### index.html

Fichier html final rendu par React JS

#### JSX

JSX = JavaScript XML (HTMl est du XML)
Le JSX écrit dans le fichier est transformé par la librairie React par du code qui peut fonctionner dans un navigateur. C'est une syntaxe spécifique à React, donc il y a des attributs et balises en HTMl classiques mais aussi d'autres spécifiques a React. CE N'EST PAS DU HTML CLASSIQUE
Il n'est pas permis de renvoyer un block de JSX avec plusieurs elements racine (plusieurs div sans div parente).

Pour récuperer des valeurs ou faire du JS basique, on peut mettre dans le JSX :

```
const variable = 'content';
return (
  <div>
    <div>{variable}</div>
    <div>{1+1}</div>
    <div>{Math.random()}</div>
  </div>
);
```
