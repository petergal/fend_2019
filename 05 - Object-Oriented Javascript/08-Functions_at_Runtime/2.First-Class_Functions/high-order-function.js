/*

Declare a function named `higherOrderFunction` that takes no arguments,
and returns an anonymous function.

The returned function itself takes no arguments as well, and simply
returns the number 8.

*/

function higherOrderFunction() {
  return function () {
    return 8;
  };
}
