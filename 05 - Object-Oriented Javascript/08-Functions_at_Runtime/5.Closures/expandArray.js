/*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/

function expandArray() {
  const myArray = [1, 1, 1];
  return function() {
    myArray.push(1);
    return myArray;
  }
}

const closure = expandArray();
for (let i = 0; i < 3; i++) {
  console.log(closure());
}
