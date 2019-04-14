function remember(number) {
  const s1 = 'hello';
    return function f1() {
        return s1;
    }
}
const returnedFunction = remember(5);
console.log( returnedFunction() );
// 5
