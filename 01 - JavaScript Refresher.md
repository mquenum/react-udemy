# REACT JS

## JavaScript Refresher

### let & const

Nouvelles déclarations et types de variables :

#### let

comme var, pour les variables dont la valeur n'est pas fixe

#### const

variable déclarée une fois, dont la valeur est obligatoirement déclarée lors de sa création et dont la valeur ne peut pas être réassignée après sa déclaration.

### Arrow functions

`const myFunc = (arg1, arg2, ...) => {...}` nouveau type de déclaration de function.
Permet de régler de nombreux soucis avec `this`, qui désigne alors toujours le bon contexte (???)

Avec un seul argument :
`const myFunc = arg => {...}`

Dans le cas ou on ne fait que retourner une valeur, on peut retirer les {} ainsi que le mot clé `return` :
`const myFunc = (arg1) => value`

### Exports & Imports (Modules)

Importer dans un fichier JS le contenu d'un autre fichier JS.

#### Default export :

```JavaScript
const constName = {
  key: 'value'
}
export default constName
```

Exporte par défaut la const constName qu'on pourra appeler dans un autre fichier ainsi :

```JavaScript
import shortcutName from './constName.js'
```

Dans ce cas, on peut choisir de donner le nom qu'on veut à l'import puisqu'il n'y a qu'un défault export.

#### Named export :

On peut aussi exporter des éléments précis :

```JavaScript
export const constName1 = () => {...}
export const constName2 = 'value';
```

Dans ce cas, il faudra appeler les éléments par leur nom d'export dans le fichier ou les importe :

```JavaScript
import { constName1 } from './fileName.js'
import { constName2 } from './fileName.js'
// ou
import { constName1, constName2 } from './fileName.js'
```

Il est néanmoins possible de donner un alias lors de l'import :

```JavaScript
import { constName1 as alias } from './fileName.js'
```

Il est également possible de charger tout le contenu exporté d'un JS sous la forme d'un 'bundled object' :

```JavaScript
import * as alias from './fileName.js'
```

### Classes

```JavaScript
class className {
  constructor() {
    // function a toujours créer en 1er pour initialiser la class
    this.val = 'value';
  }
  printKey(){
    console.log(this.val);
  }
}
// qu'on appellera ainsi, comme pour appeler un object constructor
const classNameName = new className();
classNameName.printKey();
```

Comme avec le prototypage (https://www.w3schools.com/js/js_object_prototypes.asp), on peut étendre une class préexistante :

```JavaScript
class ClassName {
  constructor() {
    this.val = 'value';
    this.parentVal = 'val parent';
  }
  printVal(){
    console.log(this.val);
  }
  printValParent(){
    console.log(this.parentVal);
  }
}

class ExtendClassName extends ClassName {
  constructor(){
    // pour initialiser la class parente et donc accéder au éléments qui y sont déclarés
    super();
    this.val = 'revalue';
    this.otherVal = 'new value';
  }

  printOtherVal(){
    console.log(this.otherVal);
  }
}
// On appelle la class enfant
const extendClassName = new ExtendClassName();
// ce qui nous permet d'accéder aux propriétés et aux méthodes de la class enfant mais aussi de la class parent
extendClassName.printVal();
extendClassName.printOtherVal();
extendClassName.printValParent();
console.log(extendClassName.otherVal);
console.log(extendClassName.parentVal);
```

### Classes, properties & methods

#### properties

Variables rattachées à une class/object

```JavaScript
class className {
  constructor() {
    // ça c'est une property
    this.val = 'value';
  }
  // reste du code
}
```

On peut éviter de déclarer la function `constructor` et faire directement `val = 'value'`

#### methods

Functions rattachées à une class/object

```JavaScript
class className {
  // reste du code
  // ça c'est une method
  printKey(){
    console.log(this.val);
  }
}
```

On peut déclarer la function directement ainsi :

```JavaScript
printKey = () => {
  console.log(this.val);
}
```

On pourrait donc déclarer une class ainsi (necessite de compiler le JS avec Babel):

```JavaScript
class ClassName {
  // plus besoin de la function constructor pour initialiser la class
  val = 'value';
  parentVal = 'val parent';

  printVal = () => {
    console.log(this.val);
  }
  printValParent = () => {
    console.log(this.parentVal);
  }
}

class ExtendClassName extends ClassName {
  // plus besoin de super() pour initialiser la class parente non plus
  val = 'revalue';
  otherVal = 'new value';

  printOtherVal = () => {
    console.log(this.otherVal);
  }
}
// On appelle la class enfant
const extendClassName = new ExtendClassName();
// ce qui nous permet d'accéder aux propriétés et aux méthodes de la class enfant mais aussi de la class parent
extendClassName.printVal();
extendClassName.printOtherVal();
extendClassName.printValParent();
console.log(extendClassName.otherVal);
console.log(extendClassName.parentVal);
```

### Spread & Rest operators

se déclare ainsi : `...`

#### Spread

Pour split un array ou un object :

```JavaScript
// arrays
const oldArray = [values];
const newArray = [...oldArray, newValues];

// objects
const oldObject = {keys: 'values'};
const newObject = {
  ...oldObject,
  newKeys: 'new values'
};
```

#### Rest

Pour merge les arguments d'une function dans un array :

```JavaScript
function myFunc(...args){
  // on peut passer plus d'un argument lors de l'appel de la function, qui seront réunis dans un array, on pourra donc appliquer a cete liste d'argument des methods spécifiques aux arrays
  return args.sort();
}
// ou en ES7 comme vu précédemment :
const myFunc = (...args) => args.sort();
```

### Destructuring

Extraire et stocker dans une variable un seul element d'un array ou d'un object.

#### Array Destructuring

```JavaScript
// on crée un array
const myArray = [1, 2, 3];
// en utilisant cette syntaxe, on récupère les valeurs aux index ou se trouvent les variables dans l'array
[val1, ,val3] = myArray;
// on print la valeur des array
console.log(val1, val3);
```

#### Object Destructuring

```JavaScript
// on crée un object
const myObj = {myKey: 'value'};
// en utilisant cette syntaxe, on récupère les valeurs dont la key correspond
{myKey} = myObj;
// on print la valeur des array
console.log(myKey);
```

### Reference & primitive type

Number, strings, boolean : des primitives.
Quand on déclare l'un d'entre eux dans une variable et qu'on assigne cette variable a une autre variable, la 1e variable est copiée dans la seconde. Si on modifie la 1è variable, on ne retrouvera pas cette modif dans la 2nde.

Array, object : reference
Quand on déclare l'un d'entre eux dans une variable et qu'on assigne cette variable à une autre variable, on assigne a la 2nde variable une référence vers la 1e variable. La variable à laquelle on fait référence est stockée et en mémoire et toute modification apportée à cette variable sera impactée dans la seconde. Ce n'est pas la valeur de l'object qui est copiée mais le pointer (la reference) vers cette object.
Utiliser l'opérateur spread pour copier les valeurs et pas le pointer :

```JavaScript
const myObj = {myKey: 'value'};
const newObj = {
  ...myObj
};
```

### Array functions

Ne pas oublier les function classiques qu'on peut executer sur des array (très utilies dans React)

- [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b)
- [concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b)
- [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
