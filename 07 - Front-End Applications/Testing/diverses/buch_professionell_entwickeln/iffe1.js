(function() {
  var x = 11;
  if(x<20) {
    (function() {
      var x = 4;
      console.log(x); // Ausgabe: 4
    })();
  }
  if(x>2) {
    (function() {
      var x = 7;
      console.log(x); // Ausgabe: 7
    })();
  }
  console.log(x);     // Ausgabe: 11
})();

// Listing 2.83 Übertriebenes Emulieren von Block-Scope mit IIFEs
// Auszug aus: Philip Ackermann. „Professionell entwickeln mit JavaScript.“ iBooks.
