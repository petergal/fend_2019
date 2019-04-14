/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression


var laugh = function(l) {
    var ha = '';
  for (var i = 1; i <= l; i++) {
      ha += 'ha'
  }
  return ha + '!';
};

emotions('happy', laugh(3));
