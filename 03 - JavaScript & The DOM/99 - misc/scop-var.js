getClothing(false);

function getClothing (isCold) {
  if (isCold) {
    console.log('if');
    var freezing = "Grab a jacket!"; // undefined wg. hoisting
    let freezing2 = "Grab another jacket!"; // Reference Error, da nicht deklariert/block sope
    console.log(isCold);

  } else {
    console.log(('else'));
    var hot = "It's a shorts kind of day.";
    console.log(freezing);
    console.log(freezing2);
  }

}
