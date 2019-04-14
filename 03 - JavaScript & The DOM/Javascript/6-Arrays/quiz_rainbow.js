/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
var removed = rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(4, 0, "Purple");
console.log(rainbow);
