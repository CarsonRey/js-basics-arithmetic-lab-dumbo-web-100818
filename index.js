/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/
// Why not Math.floor(Math.random()) ?
// Write your code below this line!
let newID = 1000000000 + oldID;
let ageIsValid = Number.isInteger(currentAge);
let randomNumber = Math.random() * 20;
  // multiplies 20 by any number between 0 & 1, trailed by sig figs; excludes 20
let randomInteger = Math.floor(randomNumber);
  // rounds down all numbers to whole numbers

let randomUserID = randomInteger + 1000000001;
  // adds the whole numbers to the ID starter code. We start @ 1 because randomNumber could be zero esp when we use Math.floor
