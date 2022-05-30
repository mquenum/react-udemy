import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

class className {
  constructor() {
    // function a toujours créer en 1er pour initialiser la class
    this.val = 'value';
  }
  printKey(){
    console.log(this.val);
  }
}
// qu'on appellera ainsi, comme pour une class constructor
const classNameName = new className();
classNameName.printKey();