/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(lines) {
  for (var line = 1; line <= lines; line++) {
    console.log(makeLine(line));
  }
  return '';
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
