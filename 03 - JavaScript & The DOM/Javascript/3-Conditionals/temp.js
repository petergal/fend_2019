var foo = 2;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo ist 0 - diese case-Klausel wird ausgeführt
    console.log(0)
    // HINWEIS: break Anweisung wurde hier weggelassen
  case 1: // Da keine break Anweisung in 'case 0:'
    // wird diese Klausel ebenfalls ausgeführt,
    // obwohl der Wert nicht mit dem Ausdruck von
    // switch übereinstimmt
    console.log(1);
    break; // das Programm verlässt die switch Anweisung.
    // 'case 2:' wird nicht ausgeführt
  case 2:
    console.log(2);
  default:
    console.log('default');
}
